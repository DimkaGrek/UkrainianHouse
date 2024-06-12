import * as yup from 'yup';
import { urlPattern } from '../constants';

export const newsFormSchema = yup.object().shape({
  title: yup
    .string()
    .required('Article Title is required')
    .min(5, 'Article Title should be at least 5 letters')
    .max(80, 'Article Title must not exceed 80 letters'),
  publishDate: yup.date().required('Date is required'),
  content: yup
    .string()
    .required('Article Text is required')
    .min(25, 'Article Text should be at least 25 letters 25'),
  btnText: yup
    .string()
    .required('Button Text is required')
    .min(5, 'Button Text should be at least 5 letters')
    .max(25, 'Button Text not exceed 80 letters'),
  btnLink: yup
    .string()
    .required('Button Link is required')
    .matches(urlPattern, 'Button Link must be correct (https://example.com)'),
});
