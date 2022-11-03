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
    localStorage.setItem('id', JSON.stringify(cardData.map((cart) => cart.id)));
  }, [cardData]);

  console.log(cardData.map((cart) => cart.id));

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
