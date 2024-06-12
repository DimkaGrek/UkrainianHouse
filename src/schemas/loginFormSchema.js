import * as Yup from 'yup';

import { emailPattern } from '../constants';

export const loginFormShema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required.')
    .matches(emailPattern, 'Email is not valid'),

  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Your password should be 8 or more characters')
    .max(64, 'Your password should not be more than 64 characters')
    .matches(/^\S*$/, 'Your password should not contain spaces'),
});
