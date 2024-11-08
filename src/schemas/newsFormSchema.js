import * as yup from 'yup';
import { urlPattern } from '../constants';

export const newsFormSchema = yup
  .object()
  .shape({
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
  })
  .test(
    'btnText-and-btnLink',
    null,

    function (values) {
      const { btnText, btnLink } = values;

      if ((btnText && !btnLink) || (!btnText && btnLink)) {
        const missingField = btnText ? 'btnLink' : 'btnText';
        return this.createError({
          message:
            missingField === 'btnText'
              ? 'Button Text is required if Button Link is provided'
              : 'Button Link is required if Button Text is provided',
          path: missingField,
        });
      }

      if (btnText) {
        if (btnText.length < 5) {
          return this.createError({
            message: 'Button Text should be at least 5 letters',
            path: 'btnText',
          });
        }
        if (btnText.length > 25) {
          return this.createError({
            message: 'Button Text must not exceed 25 letters',
            path: 'btnText',
          });
        }
      }

      if (btnLink) {
        if (!urlPattern.test(btnLink)) {
          return this.createError({
            message: 'Button Link must be correct (https://example.com)',
            path: 'btnLink',
          });
        }
      }

      return true;
    }
  );
