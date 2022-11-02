import { Phone } from '../../types/Phone';
import { Card } from '../Card';
import { Title } from '../Title';
import styles from './PhonesList.module.scss';

interface Props {
  phonesList: Phone[];
}
export const PhonesList: React.FC<Props> = ({ phonesList }) => {
  console.log(phonesList);
  return (
    <>
      <Title count={phonesList.length} />
      <div className={styles.container}>
        {phonesList.map(
          ({ name, price, fullPrice, capacity, ram, screen, id, image }) => (
            <Card
              key={id}
              name={name}
              price={price}
              fullPrice={fullPrice}
              capacity={capacity}
              ram={ram}
              screen={screen}
              image={image}
            />
          ),
        )}
      </div>
    </>
  );
};
