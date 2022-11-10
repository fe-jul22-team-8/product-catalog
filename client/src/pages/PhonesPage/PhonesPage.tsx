import { CardProvider } from '../../context/CardContext';
import { useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';

import { PhonesDataContext } from '../../context/DataContext';
import { useContext } from 'react';

import { Loader } from '../../components/Loader';
import { PhonesList } from '../../components/PhonesList';
import styles from './PhonesPage.module.scss';

export const PhonesPage = () => {
  const { phonesList, isLoading } = useContext(PhonesDataContext);

  return (
    <section className={styles.PhonesPage}>
      {isLoading ? <Loader /> : <PhonesList phonesList={phonesList} />}
    </section>
  );
};
