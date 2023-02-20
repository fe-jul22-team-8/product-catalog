import { useContext, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card';
import './NewModels.scss';
import { Navigation } from 'swiper';
import { PhonesDataContext } from '../../context/DataContext';

export const NewModels = () => {
  const { phonesList } = useContext(PhonesDataContext);

  const newModels = useMemo(() => {
    return phonesList.filter((phone) => phone.year >= 2019);
  }, [phonesList]);

  return (
    <div className="new">
      <div className="new__nav">
        <div>
          <h1 className="new__subtitle">Brands new models</h1>
        </div>

        <div className="new__buttons">
          <div className="new__prev"></div>
          <div className="new__next"></div>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        modules={[Navigation]}
        navigation={{
          prevEl: '.new__prev',
          nextEl: '.new__next',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {newModels.map((phone) => (
          <SwiperSlide>
            <Card phone={phone} key={phone.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
