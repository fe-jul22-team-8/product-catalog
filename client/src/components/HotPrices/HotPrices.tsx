import { getDiscound } from "../../api/phones";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Card } from "../Card"
import './HotPrices.scss';
import { Phone } from "../../types/Phone";
import { Navigation } from "swiper";

export const HotPrices = () => {
  const [hotPhones, setHotPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getDiscound()
      .then(setHotPhones)
      .catch();
  }, []);

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
        {hotPhones.map((phone) => (
          <SwiperSlide>
            <Card phone={phone} key={phone.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
