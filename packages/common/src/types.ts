import { z } from 'zod';

export const createUserSchema = z.object({
    email : z.string().min(4).max(30),
    password: z.string().min(5).max(50),
    name: z.string().min(5).max(50)
})

export const signInSchema = z.object({
    email : z.string().min(4).max(30),
    password: z.string().min(5).max(50)
})

export const createRoomSchema = z.object({
    name : z.string().min(4).max(30)
})