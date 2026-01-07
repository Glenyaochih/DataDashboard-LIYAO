import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMemberAPI = {
  memberStatistic: async () => {
    return axios.get(`${BASE_URL}/statistics`);
  },
};
