import { CardContext } from '../../../context/CardContext';
import React, { useContext, useRef } from 'react';
import styles from './ItemSelect.module.scss';

interface Props {
  count: number,
}

export const ItemSelect: React.FC<Props> = ({ count }) => {
  const { setPerPage } = useContext(CardContext);
  const dropdown = useRef<HTMLSelectElement>(null);

  let countList = ["8", "4", "16", "All"];

  const handleAddrTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setPerPage(+event.target.value);
    if (event.target.value === 'All') {
      setPerPage(count);
    }
    if (dropdown.current) {
      dropdown.current.blur();
    }
  }

  return (
    < select
      ref={dropdown}
      onChange={e => handleAddrTypeChange(e)}
      className={styles.title_select} >
      {countList.map((item, key) =>
        <option
          key={key}
          value={item}>{item}
        </option>)}
    </select >)


}