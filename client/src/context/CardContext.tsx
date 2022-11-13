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
  favouriteList: string[];
  setFavouriteList: Dispatch<SetStateAction<string[]>>;
}

export const CardContext = createContext<Context>({
  setCardData: () => undefined,
  cardData: [],
  perPage: '1',
  setPerPage: () => undefined,
  sumOfItems: {},
  setSumOfItems: () => undefined,
  favouriteList: [],
  setFavouriteList: () => undefined,
});

export function CardProvider({ children }: { children?: ReactNode }) {
  const [cardData, setCardData] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const [perPage, setPerPage] = useState(searchParams.get('perPage') || '8');
  const [sumOfItems, setSumOfItems] = useState<Sum>({});
  const [favouriteList, setFavouriteList] = useState<string[]>([]);

  useEffect(() => {
    const idArray = window.localStorage.getItem('id');
    const favouriteIdArray = window.localStorage.getItem('favourite');
    if (idArray) {
      setCardData(JSON.parse(idArray));
    }

    if (favouriteIdArray) {
      setFavouriteList(JSON.parse(favouriteIdArray));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('id', JSON.stringify(cardData));
    window.localStorage.setItem('favourite', JSON.stringify(favouriteList));
  }, [cardData, favouriteList]);

  return (
    <CardContext.Provider
      value={{
        cardData,
        setCardData,
        perPage,
        setPerPage,
        sumOfItems,
        setSumOfItems,
        favouriteList,
        setFavouriteList,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
