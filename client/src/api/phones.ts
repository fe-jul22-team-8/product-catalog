import { Phone } from '../types/Phone';
import { client } from '../utils/fetchProducts';

interface Props {
  page: number;
  pageCount: number;
  resultPerPage: Phone[];
}

export const getPhones = (param: string) => {
  return client.get<Props>(param);
};
