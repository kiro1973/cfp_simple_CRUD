// import { Property } from '../types/property';

import type { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
}

export const PropertyCard = ({ property, onView, onEdit }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{property.title}</h3>
      <p className="text-gray-600 mb-2">{property.city}</p>
      <p className="text-2xl font-semibold text-blue-600 mb-4">
        €{property.price.toLocaleString()}
      </p>
      <p className="text-gray-500 mb-4">{property.surface} m²</p>
      <div className="flex gap-2">
        <button
          onClick={() => onView(property.id)}
          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View
        </button>
        <button
          onClick={() => onEdit(property.id)}
          className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  );
};