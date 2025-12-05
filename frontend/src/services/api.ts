import axios from 'axios';
// import { Property } from '../types/property';
import type { Property } from '../types/property';

const API_URL = 'http://localhost:3001/api/properties';

export const propertyApi = {
  getAll: async (): Promise<Property[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getById: async (id: string): Promise<Property> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  create: async (data: Omit<Property, 'id'>): Promise<Property> => {
    const response = await axios.post(API_URL, data);
    return response.data;
  },

  update: async (id: string, data: Partial<Omit<Property, 'id'>>): Promise<Property> => {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  }
};