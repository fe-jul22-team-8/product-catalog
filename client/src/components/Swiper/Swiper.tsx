import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Swiper.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Autoplay]);

export const Slider = React.memo(function Slider() {

  return (
    <section className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide className={styles.slider__swiperSlide}>
          <NavLink to="/phones" className={styles.slider__swiperSlide1}>
            <div className={styles.slider__link}>
              <div className={styles.slider__firstImg}></div>
            </div>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide className={styles.slider__swiperSlide}>
          <div className={styles.slider__link}>
            <div className={styles.slider__secondImg}></div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
});
