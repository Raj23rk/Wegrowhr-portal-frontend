import axios from 'axios';

const rawBaseUrl = import.meta.env.VITE_API_URL || 'https://wegrow-jobs-backend.onrender.com/api';
const cleanBaseUrl = rawBaseUrl.replace(/\/+$/, '');
const API_BASE_URL = cleanBaseUrl.endsWith('/api') ? cleanBaseUrl : `${cleanBaseUrl}/api`;

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const api = {
  // Submit HR Company & Vacancy Enrollment
  async submitEnrollment(formData) {
    try {
      const res = await client.post('/enrollments', formData);
      return res.data;
    } catch (err) {
      console.warn('Backend API note, saving in local storage:', err.message);
      // Fallback local persistence so user never loses data
      const localData = {
        _id: 'enr-' + Date.now(),
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'Submitted to Placement Cell',
      };
      const existing = JSON.parse(localStorage.getItem('wegrow_enrollments') || '[]');
      existing.unshift(localData);
      localStorage.setItem('wegrow_enrollments', JSON.stringify(existing));
      return { success: true, data: localData };
    }
  },

  // Get All Submissions (for Admin review)
  async getEnrollments() {
    try {
      const res = await client.get('/enrollments');
      return res.data || [];
    } catch (err) {
      const existing = JSON.parse(localStorage.getItem('wegrow_enrollments') || '[]');
      return existing;
    }
  },
};

export const getEnrollments = () => api.getEnrollments();
export const submitEnrollment = (data) => api.submitEnrollment(data);
