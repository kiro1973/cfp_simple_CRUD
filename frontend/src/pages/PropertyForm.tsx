import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { propertyApi } from '../services/api';

export const PropertyForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    city: '',
    price: 0,
    surface: 0,
    description: ''
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      propertyApi.getById(id).then((data) => {
        setFormData({
          title: data.title,
          city: data.city,
          price: data.price,
          surface: data.surface,
          description: data.description || ''
        });
      });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isEdit && id) {
        await propertyApi.update(id, formData);
      } else {
        await propertyApi.create(formData);
      }
      navigate('/');
    } catch (err) {
      setError('Failed to save property');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? 'Edit Property' : 'Create Property'}
      </h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
         <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          placeholder="e.g., Modern Apartment"
          required
/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="e.g., Paris"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price (€)
          </label>
      <input
        type="number"
        value={formData.price || ''}
        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        placeholder="e.g., 450000"
        required
      />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Surface (m²)
          </label>
        <input
  type="number"
  value={formData.surface || ''}
  onChange={(e) => setFormData({ ...formData, surface: Number(e.target.value) })}
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
  placeholder="e.g., 75"
  required
/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
         <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Optional description..."
          rows={4}
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1"
          >
            {isEdit ? 'Update' : 'Create'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};