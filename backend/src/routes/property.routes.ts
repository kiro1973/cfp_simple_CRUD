import { Router, Request, Response } from 'express';
import { PropertyService } from '../services/property.service';
import { createPropertySchema, updatePropertySchema, propertyIdSchema } from '../schemas/property.schema';

const router = Router();
const propertyService = new PropertyService();

router.get('/', (req: Request, res: Response) => {
  const properties = propertyService.getAllProperties();
  res.json(properties);
});

router.get('/:id', (req: Request, res: Response) => {
  const validation = propertyIdSchema.safeParse({ id: req.params.id });
  
  if (!validation.success) {
    return res.status(400).json({ error: validation.error });
  }

  const property = propertyService.getPropertyById(req.params.id);
  
  if (!property) {
    return res.status(404).json({ error: 'Property not found' });
  }

  res.json(property);
});

router.post('/', (req: Request, res: Response) => {
  const validation = createPropertySchema.safeParse(req.body);
  
  if (!validation.success) {
    return res.status(400).json({ error: validation.error });
  }

  const newProperty = propertyService.createProperty(validation.data);
  res.status(201).json(newProperty);
});

router.put('/:id', (req: Request, res: Response) => {
  const idValidation = propertyIdSchema.safeParse({ id: req.params.id });
  
  if (!idValidation.success) {
    return res.status(400).json({ error: idValidation.error });
  }

  const bodyValidation = updatePropertySchema.safeParse(req.body);
  
  if (!bodyValidation.success) {
    return res.status(400).json({ error: bodyValidation.error });
  }

  const updatedProperty = propertyService.updateProperty(req.params.id, bodyValidation.data);
  
  if (!updatedProperty) {
    return res.status(404).json({ error: 'Property not found' });
  }

  res.json(updatedProperty);
});

router.delete('/:id', (req: Request, res: Response) => {
  const validation = propertyIdSchema.safeParse({ id: req.params.id });
  
  if (!validation.success) {
    return res.status(400).json({ error: validation.error });
  }

  const deleted = propertyService.deleteProperty(req.params.id);
  
  if (!deleted) {
    return res.status(404).json({ error: 'Property not found' });
  }

  res.status(204).send();
});

export default router;