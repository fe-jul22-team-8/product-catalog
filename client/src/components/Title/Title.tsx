import styles from './Title.module.scss';
import house from '../../icons/house.svg';
import arrow from '../../icons/arrowRight.svg';
import { ItemSelect } from './ItemSelect/ItemSelect';

interface Props {
  count: number;
}

export const Title: React.FC<Props> = ({ count }) => (
  <div className={styles.title}>
    <div className={styles.title_navigation}>
      <img src={house} alt="home" className={styles.title_house} />
      <img src={arrow} alt="arrow" className={styles.title_arrow} />
      <p className={styles.title_arrowText}>Phones</p>
    </div>
    <h1 className={styles.title_lable}>Mobile phones</h1>
    <p className={styles.title_count}>{`${count} models`}</p>
    <p className={styles.title_select_text}>{'Items on page'}</p>
    <ItemSelect count={count} />
  </div>
);
