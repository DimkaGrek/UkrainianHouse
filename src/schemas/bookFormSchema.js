import * as yup from "yup";

export const bookFormSchema = yup.object().shape({
  title: yup
    .string()
    .required("Book Title is required")
    .min(5, "Book Title should be at least 5 letters")
    .max(80, "Book Title must not exceed 80 letters"),
  description: yup
    .string()
    .required("Book Description is required")
    .min(25, "Book Description should be at least 25 letters"),
  author: yup
    .string()
    .required("Author is required")
    .min(5, "Author should be at least 5 letters")
    .max(80, "Author must not exceed 80 letters"),
  aboutAuthor: yup
    .string()
    .required("About the author is required")
    .min(10, "About the author should be at least 10 letters"),
  pageCount: yup
    .number()
    .typeError("Amount of pages is required")
    .integer("Amount of pages must be an integer")
    .min(1, "Amount of pages should be at least 1"),
  publicationYear: yup
    .number()
    .typeError("Year of publishing is required")
    .test(
      "is-valid-year",
      "Year of publishing must be correct",
      (value) =>
        /^\d{4}$/.test(value) &&
        parseInt(value, 10) !== 0 &&
        parseInt(value, 10) <= new Date().getFullYear()
    ),
  genre: yup
    .string()
    .required("Genre is required")
    .min(3, "Genre should be at least 5 letters")
    .max(25, "Genre must not exceed 80 letters"),
  quantity: yup
    .number()
    .typeError("Quantity is required")
    .integer("Quantity must be an integer")
    .min(0, "Quantity cannot be negative"),
});
