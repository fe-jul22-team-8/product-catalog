import classNames from 'classnames';
import  './Pagination.scss';

function getNumbers(from: number, to: number): number[] {
    const numbers = [];
  
    for (let n = from; n <= to; n += 1) {
      numbers.push(n);
    }
  
    return numbers;
  }

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);

  const handleSetPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const page = Number(event.currentTarget.dataset.currentPage);

    if (page < 1 || page === currentPage || page > totalPages) {
      return;
    }

    onPageChange(page);
  };

  return (
    <div className="pagination">
    <ul className='pagination-ul'>
      <li
        className={classNames(
          'page-item', { disabled: currentPage === 1 },
        )}
      >
        <a
          className="page-link page-arrow left"
          href="#prev"
          data-current-page={currentPage - 1}
          aria-disabled={currentPage === 1}
          onClick={handleSetPage}
        >
        </a>
      </li>
      {getNumbers(1, totalPages).map((page) => (
        <li className={classNames(
          'page-item', { 'page-active': page === currentPage },
        )}
        >
          <a
            className={classNames(
                'page-link', { 'link-active': page === currentPage },
              )}
            data-current-page={page}
            href={`#${page}`}
            onClick={handleSetPage}
          >
            {page}
          </a>
        </li>
      ))}
      <li
        className={classNames(
          'page-item', { disabled: currentPage === totalPages },
        )}
      >
        <a
          className="page-link page-arrow right"
          href="#next"
          data-current-page={currentPage + 1}
          aria-disabled={currentPage === totalPages}
          onClick={handleSetPage}
        >
          
        </a>
      </li>
    </ul>
    </div>
  );
};