import { Phone } from '@/types/Phone';
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, } from 'react';

interface Context {
    cardData: Phone[],
    setCardData: Dispatch<SetStateAction<Phone[]>>,
    perPage: number,
    setPerPage: Dispatch<SetStateAction<number>>,
}

export const CardContext = createContext<Context>({
    setCardData: () => undefined,
    cardData: [],
    perPage: 8,
    setPerPage: () => undefined,
});

export function CardProvider({ children }: { children?: ReactNode }) {
  const [cardData, setCardData] = useState<Phone[]>([]);
  const [perPage, setPerPage] = useState(1);

  console.log(cardData);

  return (
    <CardContext.Provider value={{
        cardData, 
        setCardData,
        perPage,
        setPerPage,
    }}>
      {children}
    </CardContext.Provider>
  );
}