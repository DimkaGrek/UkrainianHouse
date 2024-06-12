import * as Yup from 'yup';

export const resetPaswordShema = Yup.object().shape({
  code: Yup.string().required('Code is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password should be 8 or more characters')
    .max(64, 'Your password should not be more than 64 characters')
    .matches(/^\S*$/, 'Your password should not contain spaces'),
});
