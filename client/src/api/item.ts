import { PhoneType } from "../types/PhoneType";
import axios from "axios";

axios.defaults.baseURL = 'https://project-nice-gadgets.onrender.com/';

export const getOnePhone = async (id: string | undefined) => {
  const result = await axios.get(
    `/data/phones/${id}.json`,
  );

  return result.data as PhoneType;
};
