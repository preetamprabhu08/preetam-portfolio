import axios from 'axios';
import { ContactFormData } from './types';

const API_BASE_URL = import.meta.env.PROD 
  ? 'https://preetam-portfolio-pied.vercel.app' // Vercel server URL (update this after deployment)
  : 'http://localhost:5000';

export const sendContactForm = async (formData: ContactFormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};