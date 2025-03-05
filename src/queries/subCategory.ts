"use server"
//Clerk
import { currentUser } from "@clerk/nextjs/server";

//DB Prisma
import {db} from "@/lib/db"

//Prisma model
import {  SubCategory } from "@prisma/client";

// Function: upsertSubCategory
// Description: Upserts a subcategory into the database, updating if it exists or creating a new one
// Permission Level: Admin only
// Parameters:
//   subcategory: subCategory object containing details of the subcategory to be upserted.
// Returns: Updated or newly created subcategory details.

export const upsertSubCategory = async (subCategory: SubCategory) => {
  try {
    // Get current user
    const user = await currentUser();

    // Ensure user is authenticated
    if (!user) throw new Error("Unauthenticated.");

    // Verify admin permission
    if (user.privateMetadata.role !== "ADMIN") 
      throw new Error('Unauthorized Access: Admin Privaleges Required For Entry');
    
    // Ensure subCategory data is provided
    if (!subCategory) throw new Error("Please provide subCategory data.");

    // Throw error if category with same name or URL already exists
    const existingSubCategory = await db.subCategory.findFirst({
      where: {
        AND: [
          {
            OR: [{ name: subCategory.name }, { url: subCategory.url }],
          },
          {
            NOT: {
              id: subCategory.id,
            },
          },
        ],
      },
    });
    
    // Throw error if category with same name or URL already exists
    if (existingSubCategory) {
      let errorMessage = "";
      if (existingSubCategory.name === subCategory.name) {
        errorMessage = "A SubCategory with the same name already exists";
      } else if (existingSubCategory.url === subCategory.url) {
        errorMessage = "A SubCategory with the same URL already exists";
      }
      throw new Error(errorMessage);
    }

    // Upsert SubCategory into the database
    const subCategoryDetails = await db.subCategory.upsert({
      where: {
        id: subCategory.id,
      },
      update: subCategory,
      create: subCategory,
    });

    return subCategoryDetails;

  } catch (error) {
    // Handle error
    console.log(error);
    
  }
};

// Function: getAllSubCategories
// Description: Retrieves all subCategories from the database.
// Permission Level: Public
// Returns: Array of SubCategories sorted by updatedAt date in descending order

export const getAllSubCategories = async () => {
  // Retrieve all subCategories from the database
  const subCategories = await db.subCategory.findMany({
    include: {
      category: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return subCategories;
};

// Function: getSubCategory
// Description: Retrieves a specific SubCategory from the database.
// Access Level: Public
// Parameters:
//  - SubCategoryId: The ID of the category to be retrieved.
// Returns: Details of the requested SubCategory.

export const getSubCategory = async (subCategoryId: string) => {
  // Ensure subCategory ID is provided
  if (!subCategoryId) throw new Error("Please provide subCategory ID.");

  // Retrieve category
  const subCategory = await db.subCategory.findUnique({
    where: {
      id: subCategoryId,
    },
  });

  return subCategory;
};

// Function: deleteSubCategory
// Description: Deletes a SubCategory from the database.
// Permission Level: Admin only
// Parameters:
//  - SubCategoryId: The ID of the SubCategory to be deleted.
// Returns: Response indicating success or failure of the deletion operation.

export const deleteSubCategory = async (subCategoryId: string) => {
  // Get current user
  const user = await currentUser();

  // Check if user is authenticated
  if (!user) throw new Error("Unauthenticated."); 

  // Verify admin permission
  if (user.privateMetadata.role !== "ADMIN") {
    throw new Error(
      "Unauthorized Access: Admin Privileges Required for Entry."
    );
  }

  // Ensure subCategory ID is provided
  if (!subCategoryId) throw new Error("Please provide category ID.");

  // Delete subCategory from the database
  const response = await db.subCategory.delete({
    where: {
      id: subCategoryId,
    },
  });

  return response;
};