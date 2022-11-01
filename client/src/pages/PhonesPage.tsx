import { useEffect, useState } from 'react';
import { getPhones } from '../api/phones';
import { Loader } from '../components/Loader';
import { PhonesList } from '../components/PhonesList';
import { Phone } from '../types/Phone';

interface Props {
  page: number;
  pageCount: number;
  resultPerPage: Phone[];
}

export const PhonesPage = () => {
  const [phonesList, setPhonesList] = useState<Phone[]>([]);
  const [data, setData] = useState<Props | null>(null); // need for pagination
  const [isError, setIsError] = useState(false); // need for error message and reload button
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    try {
      const phonesFromServer = await getPhones('/phones');
      setIsLoading(true);
      setData(phonesFromServer);
      setPhonesList(phonesFromServer.resultPerPage.slice(0, 8));
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(phonesList);
  return (
    <>
      <h1 className="title">Phones Page</h1>
      {isLoading 
      ? <PhonesList phonesList={phonesList} /> 
      : <Loader />
      }
    </>
  );
};
