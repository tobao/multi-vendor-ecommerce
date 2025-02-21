// Queries
import { getAllCategories } from "@/queries/category";

// Data table
import DataTable from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import CategoryDetails from "@/components/dashboard/forms/category-details";

export default async function AdminCategoriesPage() {
  // Fetching stores data from the database
  const categories = await getAllCategories();

  // Checking if no categories are found
  if (!categories) return null; // If no categories found, return null

  const CLOUDINARY_CLOUD_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME;
  if (!CLOUDINARY_CLOUD_KEY) return null;

  return (
    <DataTable
      heading="HAHAHAHAHAHA"
      actionButtonText={
        <>
          <Plus size={15} />
          Create category
        </>
        
      }
      modalChildren={
        <CategoryDetails cloudinary_key={CLOUDINARY_CLOUD_KEY} />
      }
      filterValue="name"
      data={categories}
      searchPlaceholder="Search category name..."
      columns={[]}
    />
  );
}