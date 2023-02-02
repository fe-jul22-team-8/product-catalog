import { Slider } from '../../components/Swiper';
import React from 'react';
import styles from './HomePage.module.scss';
import { Categories } from '../../components/Categories';

export const HomePage = React.memo(function HomePage() {

  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>
        Welcome to Nice Gadgets store!
      </h1>

      <Slider />
      <Categories />
    </div>
  );
});