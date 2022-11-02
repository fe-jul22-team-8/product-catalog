import { Phone } from '@/types/Phone';
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, } from 'react';

interface Context {
    cardData: Phone[],
    setCardData: Dispatch<SetStateAction<Phone[]>>,
}

export const CardContext = createContext<Context>({
    setCardData: () => undefined,
    cardData: [],
});

export function CardProvider({ children }: { children?: ReactNode }) {
  const [cardData, setCardData] = useState<Phone[]>([]);

  console.log(cardData);

  return (
    <CardContext.Provider value={{
        cardData, 
        setCardData,
    }}>
      {children}
    </CardContext.Provider>
  );
}