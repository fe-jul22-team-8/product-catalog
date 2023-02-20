import { useContext, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card';
import './HotPrices.scss';
import { Navigation } from 'swiper';
import { PhonesDataContext } from '../../context/DataContext';

export const HotPrices = () => {
  const { phonesList } = useContext(PhonesDataContext);

  const hotList = useMemo(() => {
    return phonesList.filter((phone) => phone.price <= 1300);
  }, [phonesList]);

  return (
    <div className="hot">
      <div className="hot__nav">
        <div>
          <h1 className="hot__subtitle">Hot prices</h1>
        </div>

        <div className="hot__buttons">
          <div className="hot__prev"></div>
          <div className="hot__next"></div>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        modules={[Navigation]}
        navigation={{
          prevEl: '.hot__prev',
          nextEl: '.hot__next',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          490: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {hotList.map((phone) => (
          <SwiperSlide>
            <Card phone={phone} key={phone.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
