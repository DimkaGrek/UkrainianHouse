import * as Yup from 'yup';

import { emailPattern } from '../constants';

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(emailPattern, 'Email is not valid'),
});
