import { getPhones } from '../api/phones';
import { Phone } from '../types/Phone';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface DataType {
  page: number;
  pageCount: number;
  resultPerPage: Phone[];
}

interface Context {
  phonesList: Phone[];
  setPhonesList: Dispatch<SetStateAction<Phone[]>>;
  data: DataType | null;
  setData: Dispatch<SetStateAction<DataType | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

export const PhonesDataContext = createContext<Context>({
  setPhonesList: () => undefined,
  phonesList: [],
  isLoading: true,
  setIsLoading: () => undefined,
  data: null,
  setData: () => undefined,
  isError: false,
  setIsError: () => undefined,
});

export function PhoneDataProvider({ children }: { children?: ReactNode }) {
  const [phonesList, setPhonesList] = useState<Phone[]>([]);
  const [data, setData] = useState<DataType | null>(null); // need for pagination
  const [isError, setIsError] = useState(false); // need for error message and reload button
  const [isLoading, setIsLoading] = useState(true);
  const loadData = useMemo(async () => {
    try {
      const phonesFromServer = await getPhones('/phones');
      setIsLoading(false);
      setPhonesList(phonesFromServer.resultPerPage);
    } catch (errro: any) {
      console.log(errro.message);
    }
  }, [phonesList]);

  useEffect(() => {
    loadData;
  }, []);

  return (
    <PhonesDataContext.Provider
      value={{
        phonesList,
        setPhonesList,
        data,
        setData,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </PhonesDataContext.Provider>
  );
}
