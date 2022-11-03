import { Phone } from '@/types/Phone';
import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

interface Context {
  cardData: Phone[];
  setCardData: Dispatch<SetStateAction<Phone[]>>;
}

export const CardContext = createContext<Context>({
  setCardData: () => undefined,
  cardData: [],
});

export function CardProvider({ children }: { children?: ReactNode }) {
  const [cardData, setCardData] = useState<Phone[]>([]);
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
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
