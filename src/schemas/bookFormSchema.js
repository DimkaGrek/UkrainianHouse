import * as yup from 'yup';

export const bookFormSchema = yup.object().shape({
  title: yup
    .string()
    .required('Book Title is required')
    .min(5, 'Book Title should be at least 5 letters')
    .max(80, 'Book Title must not exceed 80 letters'),
  description: yup
    .string()
    .required('Book Description is required')
    .min(25, 'Book Description should be at least 25 letters'),
  author: yup
    .string()
    .required('Author is required')
    .min(5, 'Author should be at least 5 letters')
    .max(80, 'Author must not exceed 80 letters'),
  aboutAuthor: yup
    .string()
    .required('About the author is required')
    .min(25, 'About the author should be at least 25 letters'),
  pageCount: yup
    .number()
    .required('Amount of pages is required')
    .min(1, 'Amount of pages should be at least 1'),
  publicationYear: yup
    .number()
    .required('Year of publishing is required')
    .test('is-valid-year', 'Year of publishing must be correct', value =>
      /^\d{4}$/.test(value)
    ),
  genre: yup
    .string()
    .required('Genre is required')
    .min(3, 'Genre should be at least 5 letters')
    .max(25, 'Genre must not exceed 80 letters'),
  quantity: yup.number().required('Quantity is required'),
});
