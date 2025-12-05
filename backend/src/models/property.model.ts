export interface Property {
  id: string;
  title: string;
  city: string;
  price: number;
  surface: number;
  description?: string;// I added it
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment',
    city: 'Paris',
    price: 450000,
    surface: 75,
    description: 'Beautiful modern apartment in the heart of Paris'
  },
  {
    id: '2',
    title: 'Cozy Studio',
    city: 'Lyon',
    price: 180000,
    surface: 35,
    description: 'Perfect studio for students or young professionals'
  },
  {
    id: '3',
    title: 'Family House',
    city: 'Marseille',
    price: 620000,
    surface: 150,
    description: 'Spacious house with garden, ideal for families'
  }
];