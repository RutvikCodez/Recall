import * as z from "zod"

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8)
})

export const signUpSchema = z.object({
    fullName: z.string().min(5),
    email: z.email(),
    password: z.string().min(8)
})

export const signUpFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    placeholder: 'Rutvik Darji',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'rutvik@rutvik.com',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: '********',
    type: 'password',
  },
] as const

export const loginFields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'rutvik@rutvik.com',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: '********',
    type: 'password',
  },
] as const