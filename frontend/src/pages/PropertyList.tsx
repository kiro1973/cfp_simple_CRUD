import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Property } from '../types/property';
import type { Property } from '../types/property';

import { propertyApi } from '../services/api';
import { PropertyCard } from '../components/PropertyCard';

export const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await propertyApi.getAll();
      setProperties(data);
    } catch (err) {
      setError('Failed to load properties');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Properties</h1>
        <button
          onClick={() => navigate('/create')}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Add Property
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onView={(id) => navigate(`/property/${id}`)}
            onEdit={(id) => navigate(`/edit/${id}`)}
          />
        ))}
      </div>
    </div>
  );
};