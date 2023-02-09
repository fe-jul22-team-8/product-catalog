import { Phone } from '../types/Phone';
import { client } from '../utils/fetchProducts';
import axios from 'axios';

axios.defaults.baseURL = 'https://product-catalog-8d6r.onrender.com/';

interface Props {
  page: number;
  pageCount: number;
  resultPerPage: Phone[];
}

export const getPhones = (param: string) => {
  return client.get<Props>(param);
};

export const getPhonesByNameId = (phoneId: string | undefined) => {
  return client.get(`/phones/${phoneId}`);
};

export function getNew() {
  return axios.get('/phones/new').then((res) => res.data);
}

export function getDiscound() {
  return axios.get('/phones/discount').then((res) => res.data);
}
