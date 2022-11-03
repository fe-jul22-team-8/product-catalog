import styles from './CartPages.module.scss';
import { CartTitle } from '../../components/CartTitle';
import { CartList } from '../../components/CartList';
import { CartCheckout } from '../../components/CartCheckout';

export const CartPages = () => {
  return (
    <>
      <div className={styles.container}>
        <CartTitle />
        <div className={styles.CartContainer}>
          <CartList />
          <CartCheckout />
        </div>
      </div>
    </>
  );
};
