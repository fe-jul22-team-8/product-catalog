import { Slider } from '../../components/Swiper';
import styles from './HomePage.module.scss';
import { Categories } from '../../components/Categories';
import { HotPrices } from '../../components/HotPrices/HotPrices';
import { NewModels } from '../../components/NewModels';

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>Welcome to Nice Gadgets store!</h1>

      <Slider />

      <NewModels />

      <Categories />

      <HotPrices />
    </div>
  );
};
