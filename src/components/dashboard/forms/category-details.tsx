import { Category } from "@prisma/client";
import { FC } from "react";

interface CategoryDetailsProps {
  data?: Category; // Dữ liệu danh mục, có thể có hoặc không
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryDetails: FC<CategoryDetailsProps> = ({ data }) => {
  return <div></div>;
};

export default CategoryDetails;