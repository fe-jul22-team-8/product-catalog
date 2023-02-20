import { useParams } from 'react-router-dom';
import { PhotosBlockSelecting } from '../../components/PhotosBlockSelecting';
import styles from './ProductDetailPage.module.scss';
import { useContext, useEffect, useState } from 'react';
import { PhonesDataContext } from '../../context/DataContext';
import { ColorSize } from '../../components/ColorSize';
import { DetailsTitle } from '../../components/DetailsTitle';
import { AboutSection } from '../../components/AboutSection';
import { SpecsSection } from '../../components/SpecsSection';
import { PhoneType } from '../../types/PhoneType';
import { getOnePhone } from '../../api/item';
import { RecommendedGoods } from '../../components/Recommended';

export const ProductDetailPage = () => {
  const { phonesList } = useContext(PhonesDataContext);
  const { phoneId } = useParams();
  const [foundPhone, setFoundPhone] = useState<PhoneType>();

  useEffect(() => {
    getOnePhone(phoneId)
      .then((res) => {
        window.scrollTo(0, 0);

        return setFoundPhone(res);
      })
      .catch(() => {
        return console.log('Error');
      });
  }, [phoneId]);

  const currentPhone = phonesList.find((phone) => phone.phoneId === phoneId);

  return (
    <div className={styles.detail}>
      <DetailsTitle name={currentPhone?.name} />
      <div className={styles.detail__wrapper}>
        <PhotosBlockSelecting phone={currentPhone} />
        <ColorSize phone={currentPhone} />
      </div>
      <div className={styles.detail__desc}>
        <AboutSection />
        <SpecsSection phone={foundPhone} />
      </div>
      <RecommendedGoods />
    </div>
  );
};
