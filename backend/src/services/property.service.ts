import { Property, properties } from '../models/property.model';
import { CreatePropertyInput, UpdatePropertyInput } from '../schemas/property.schema';

export class PropertyService {
  private properties: Property[] = properties;

  getAllProperties(): Property[] {
    return this.properties;
  }
//undefined if  not found
  getPropertyById(id: string): Property | undefined {
    return this.properties.find(property => property.id === id);
  }

  createProperty(data: CreatePropertyInput): Property {
    const newProperty: Property = {
      id: Date.now().toString(),
      ...data
    };
    this.properties.push(newProperty);
    return newProperty;
  }
//null when operation failed
  updateProperty(id: string, data: UpdatePropertyInput): Property | null {
    const index = this.properties.findIndex(property => property.id === id);
    if (index === -1) return null;

    this.properties[index] = {
      ...this.properties[index],
      ...data
    };
    return this.properties[index];
  }

  deleteProperty(id: string): boolean {
    const index = this.properties.findIndex(property => property.id === id);
    if (index === -1) return false;

    this.properties.splice(index, 1);
    return true;
  }
}