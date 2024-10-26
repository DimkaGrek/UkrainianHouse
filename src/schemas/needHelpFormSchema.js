import * as yup from 'yup';

import { emailPattern } from '../constants';

export const needHelpFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Min length must be more than 2 chars')
    .max(32, 'Max length must be less than 32 chars'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(13, 'Enter a valid phone number')
    .max(13, 'Enter a valid phone number'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email')
    .matches(emailPattern, 'Enter a valid email')
    .max(64, 'Max length must be less than 64 chars'),
  message: yup
    .string()
    .required('Message is required')
    .min(3, 'Message should be at least 3 letters')
    .max(300, 'Message must not exceed 300 letters'),
});
