import {z} from 'zod';


export const messgaeSchema=z.object({
  content: z
  .string()
  .min(10, {message: "Message must be at least of 10 characters"})
  .max(300,{message: 'Content must be no Longer than 300 Characters'})
})