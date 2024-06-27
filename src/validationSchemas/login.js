import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('insert a valid email')
        .required('email is required'),
    password: yup
        .string()
        .min(8,'Too short')
        .max(40, 'Too long')
        .required('Password is required')
})