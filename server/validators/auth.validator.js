const z = require('zod');

// create object schema

const signupSchema = z.object({
    username: z
    .string({required_error: 'Username is required'})
    .trim()
    .min(3, 'Username is too short')
    .max(32, 'Username is too long'),
    email: z
    .string({required_error: 'Email is required'})
    .email('Invalid email format'),
    phone: z
    .string({required_error: 'Phone is required'})
    .min(10, 'Phone number is too short')
    .max(10, 'Phone number is too long'),
    password: z
    .string({required_error: 'Password is required'})
    .min(6, 'Password is too short')
    .max(50, 'Password is too long')
});

const loginSchema = z.object({
    email: z
    .string({required_error: 'Email is required'})
    .email('Invalid email format'),
    password: z
    .string({required_error: 'Password is required'})
    .min(6, 'Password is too short')
    .max(50, 'Password is too long')
});

module.exports = { signupSchema , loginSchema};