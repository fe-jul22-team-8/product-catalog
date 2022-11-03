import { CardContext, CardProvider } from '../../context/CardContext';
import { useState, useEffect, useContext } from 'react';
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
  const { perPage, setPerPage } = useContext(CardContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+(searchParams.get('page') || 1));
  console.log(searchParams.get('perPage'));
  if (perPage === 1) {
    setPerPage(+(searchParams.get('perPage') || 8));
  }


  useEffect(() => {
    const params = new URLSearchParams();

    params.append('page', `${page}`);
    params.append('perPage', `${perPage}`);
    setSearchParams(params.toString());
  }, [page, perPage]);

  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, phonesList.length);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  return (
    <>
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
        perPage={perPage}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </>
  );
};
