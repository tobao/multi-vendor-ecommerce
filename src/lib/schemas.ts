import * as z from "zod";

// Category form schema
export const CategoryFormSchema = z.object({
  name: z
    .string({
      required_error: "Category name is required.",
      invalid_type_error: "Category name must be a string.",
    })
    .min(2, { message: "Category name must be at least 2 characters long." })
    .max(50, { message: "Category name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z0-9\s]+$/, {
      message: "Only letters, numbers, and spaces are allowed in the category name.",
    }),
  image: z
    .object({
      url: z.string(),
    })
    .array()
    .length(1, "Choose only one category image"),
  url: z
    .string({
      required_error: "Category url is required",
      invalid_type_error: "Category url must be a string",
    })
    .min(2, { message: "Category url must be at least 2 characters long." })
    .max(50, { message: "Category url cannot exceed 50 characters." })
    .regex(/^(?!.*(?:[-_]{2,}))[a-zA-Z0-9-_]+$/, {
      message: "Only letters, numbers, hyphen, and underscore are allowed in the category url, and consecutive occurrences of hyphen or underscore are not permitted.",
    }),
  featured: z.boolean().default(false),  
});