import { Phone } from '@/types/Phone';
import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { useSearchParams } from 'react-router-dom';

export interface Sum {
  [name: string]: number;
}

interface Context {
  cardData: string[];
  setCardData: Dispatch<SetStateAction<string[]>>;
  perPage: string;
  setPerPage: Dispatch<SetStateAction<string>>;
  sumOfItems: Sum;
  setSumOfItems: Dispatch<SetStateAction<Sum>>;
}

export const CardContext = createContext<Context>({
  setCardData: () => undefined,
  cardData: [],
  perPage: '1',
  setPerPage: () => undefined,
  sumOfItems: {},
  setSumOfItems: () => undefined,
});

export function CardProvider({ children }: { children?: ReactNode }) {
  const [cardData, setCardData] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const [perPage, setPerPage] = useState(searchParams.get('perPage') || '8');
  const [sumOfItems, setSumOfItems] = useState<Sum>({});

  useEffect(() => {
    const idArray = window.localStorage.getItem('id');
    if (idArray) {
      setCardData(JSON.parse(idArray));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('id', JSON.stringify(cardData));
  }, [cardData]);

  return (
    <CardContext.Provider
      value={{
        cardData,
        setCardData,
        perPage,
        setPerPage,
        sumOfItems,
        setSumOfItems,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
