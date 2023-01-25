import styles from './FavouritesPage.module.scss';
import { FavouritesTitle } from '../../components/FavouritesTitle';
import { FavouritesList } from '../../components/FavouritesList';

export const FavouritesPage = () => {
  return (
    <div className={styles.container}>
      <FavouritesTitle />
      <FavouritesList />
    </div>
  );
};
