import * as z from "zod";

export const jobSchema = z.object({
  title: z.string().min(13).max(120),
  description: z.string().min(100).max(300),
  tags: z.array(z.string().min(1).max(15)).min(1).max(7),
  place: z.string().min(4).max(17),
  salary: z.number().min(1).max(14),
  duration: z.date(),
});
