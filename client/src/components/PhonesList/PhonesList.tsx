import { CardProvider } from '../../context/CardContext';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { Card } from '../Card';
import { Pagination } from '../Pagination';
import { Title } from '../Title';
import styles from './PhonesList.module.scss';

interface Props {
  phonesList: Phone[];
}
export const PhonesList: React.FC<Props> = ({ phonesList }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+(searchParams.get('page') || 1));
  useEffect(() => {
    const params = new URLSearchParams();

    params.append('page', `${page}`);
    setSearchParams(params.toString());
  }, [page]);

  const start = (page - 1) * 16 + 1;
  const end = Math.min(page * 16, phonesList.length);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  return (
    <>
      <CardProvider>
        <Title count={phonesList.length} />
        <div className={styles.container}>
          {phonesList.slice(start - 1, end).map(phone => (
              <Card
                key={phone.id}
                phone={phone}
              />
            ),
          )}
        </div>

        <Pagination
          total={phonesList.length}
          perPage={16}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </CardProvider>
    </>
  );
};
