import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getInvoiceAPI = {
  dailyInvoice: async () => {
    return axios.get(`${BASE_URL}/daily_invoice`);
  },
};
