import { z } from 'zod';

export const createPropertySchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  price: z.number().positive('Price must be positive'),
  surface: z.number().positive('Surface must be positive'),
  description: z.string().optional()
});

// in update it is same as creation but we can update just one, that's why we used partial
export const updatePropertySchema = createPropertySchema.partial();

export const propertyIdSchema = z.object({
  id: z.string().min(1, 'ID is required')
});

export type CreatePropertyInput = z.infer<typeof createPropertySchema>;
export type UpdatePropertyInput = z.infer<typeof updatePropertySchema>;