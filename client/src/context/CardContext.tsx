import { Phone } from '@/types/Phone';
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect, } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Context {
    cardData: Phone[],
    setCardData: Dispatch<SetStateAction<Phone[]>>,
    perPage: string,
    setPerPage: Dispatch<SetStateAction<string>>,
}

export const CardContext = createContext<Context>({
    setCardData: () => undefined,
    cardData: [],
    perPage: '1',
    setPerPage: () => undefined,
});

export function CardProvider({ children }: { children?: ReactNode }) {
  const [cardData, setCardData] = useState<Phone[]>([]);
  const [searchParams] = useSearchParams();
  const [perPage, setPerPage] = useState(searchParams.get('perPage') || '8');

  useEffect(() => {
    if (window.localStorage.getItem('id')) {
      // @ts-ignore
      setCardData(JSON.parse(window.localStorage.getItem('id')));
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
    }}>

      {children}
    </CardContext.Provider>
  );
}