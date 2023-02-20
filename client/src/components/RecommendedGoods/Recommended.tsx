import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card';
import './Recommended.scss';
import { Navigation } from 'swiper';
import { PhonesDataContext } from '../../context/DataContext';

export const RecommendedGoods = () => {
  const { phonesList } = useContext(PhonesDataContext);

  return (
    <div className="recommended">
      <div className="recommended__nav">
        <div>
          <h1 className="recommended__subtitle">You may also like</h1>
        </div>

        <div className="recommended__buttons">
          <div className="recommended__prev"></div>
          <div className="recommended__next"></div>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        modules={[Navigation]}
        navigation={{
          prevEl: '.recommended__prev',
          nextEl: '.recommended__next',
        }}
        loop={true}
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
          },
        }}
      >
        {phonesList.map((phone) => (
          <SwiperSlide>
            <Card phone={phone} key={phone.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
