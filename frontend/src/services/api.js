import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const createCheckoutSession = async (cart) => {
  const response = await axios.post(`${API_BASE_URL}/payments/create-checkout-session`, {
    cart
  });
  return response.data;
};
