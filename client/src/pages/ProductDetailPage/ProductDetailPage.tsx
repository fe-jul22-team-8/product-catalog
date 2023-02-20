import { useParams } from 'react-router-dom';
import { PhotosBlockSelecting } from '../../components/PhotosBlockSelecting';
import styles from './ProductDetailPage.module.scss';
import { useContext, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { PhonesDataContext } from '../../context/DataContext';
import { ColorSize } from '../../components/ColorSize';
import { DetailsTitle } from '../../components/DetailsTitle';
import { AboutSection } from '../../components/AboutSection';
import { SpecsSection } from '../../components/SpecsSection';
import { PhoneType } from '../../types/PhoneType';
import { getOnePhone } from '../../api/item';
import { RecommendedGoods } from '../../components/RecommendedGoods';
import { Loader } from '../../components/Loader';

export const ProductDetailPage = () => {
  const { phonesList } = useContext(PhonesDataContext);
  const { phoneId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [foundPhone, setFoundPhone] = useState<PhoneType>()

  const handleToTheTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    getOnePhone(phoneId)
      .then(res => {
        setIsLoading(true)
        handleToTheTop()

        return setFoundPhone(res)
      })
      .catch(() => {
        return console.log('Error')
      })
      .finally(() => setTimeout(() => {
        setIsLoading(false);
      }, 300));
  }, [phoneId])

  const currentPhone = phonesList.find((phone) => phone.phoneId === phoneId);

  return (
    <div className={styles.detail}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DetailsTitle name={currentPhone?.name} />
          <div className={styles.detail__wrapper}>
            <PhotosBlockSelecting phone={currentPhone} />
            <ColorSize phone={currentPhone} />
          </div>
          <div className={styles.detail__desc}>
            <AboutSection />
            <SpecsSection phone={foundPhone} />
          </div>
          <RecommendedGoods /></>
      )}
    </div>
  );
};
