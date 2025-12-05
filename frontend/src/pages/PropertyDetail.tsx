import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { Property } from '../types/property';
import type { Property } from '../types/property';

import { propertyApi } from '../services/api';

export const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      propertyApi.getById(id)
        .then(setProperty)
        .catch(() => navigate('/'))
        .finally(() => setLoading(false));
    }
  }, [id, navigate]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (!property) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-blue-500 hover:text-blue-700"
      >
        ← Back to list
      </button>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600">City</p>
            <p className="text-xl font-semibold">{property.city}</p>
          </div>
          <div>
            <p className="text-gray-600">Price</p>
            <p className="text-xl font-semibold text-blue-600">
              €{property.price.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Surface</p>
            <p className="text-xl font-semibold">{property.surface} m²</p>
          </div>
        </div>
        {property.description && (
          <div>
            <p className="text-gray-600 mb-2">Description</p>
            <p className="text-lg">{property.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};