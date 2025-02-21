"use server"
//Clerk
import { currentUser } from "@clerk/nextjs/server";

//DB Prisma
import {db} from "@/lib/db"

//Prisma model
import { Category } from "@prisma/client";

// Function: upsertCategory
// Description: Upserts a category into the database, updating if it exists or creating a new one
// Permission Level: Admin only
// Parameters:
//   category: Category object containing details of the category to be upserted.
// Returns: Updated or newly created category details.

export const upsertCategory = async (category: Category) => {
  try {
    // Get current user
    const user = await currentUser();

    // Ensure user is authenticated
    if (!user) throw new Error("Unauthenticated.");

    // Verify admin permission
    if (user.privateMetadata.role !== "ADMIN") 
      throw new Error('Unauthorized Access: Admin Privaleges Required For Entry');
    
    // Ensure category data is provided
    if (!category) throw new Error("Please provide category data.");

    // Throw error if category with same name or URL already exists
    const existingCategory = await db.category.findFirst({
      where: {
        AND: [
          {
            OR: [{ name: category.name }, { url: category.url }],
          },
          {
            NOT: {
              id: category.id,
            },
          },
        ],
      },
    });
    
    // Throw error if category with same name or URL already exists
    if (existingCategory) {
      let errorMessage = "";
      if (existingCategory.name === category.name) {
        errorMessage = "A category with the same name already exists";
      } else if (existingCategory.url === category.url) {
        errorMessage = "A category with the same URL already exists";
      }
      throw new Error(errorMessage);
    }

    // Upsert category into the database
    const categoryDetails = await db.category.upsert({
      where: {
        id: category.id,
      },
      update: category,
      create: category,
    });

    return categoryDetails;

  } catch (error) {
    // Handle error
    console.log(error);
    
  }
};

// Function: getAllCategories
// Description: Retrieves all categories from the database.
// Permission Level: Public
// Returns: Array of categories sorted by updatedAt date in descending order

export const getAllCategories = async () => {
  // Retrieve all categories from the database
  const categories = await db.category.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  return categories;
};