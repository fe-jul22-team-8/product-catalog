import { useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';
import { Loader } from '../../components/Loader';
import { PhonesList } from '../../components/PhonesList';
import { Phone } from '../../types/Phone';
import styles from './PhonesPage.module.scss';

interface DataType {
  page: number;
  pageCount: number;
  resultPerPage: Phone[];
}

export const PhonesPage = () => {
  const [phonesList, setPhonesList] = useState<Phone[]>([]);
  const [data, setData] = useState<DataType | null>(null); // need for pagination
  const [isError, setIsError] = useState(false); // need for error message and reload button
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const phonesFromServer = await getPhones('/phones');
      setIsLoading(false);
      setData(phonesFromServer);
      setPhonesList(phonesFromServer.resultPerPage);
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <section className={styles.PhonesPage}>
      {isLoading ? <Loader /> : <PhonesList phonesList={phonesList} />}
    </section>
  );
};
