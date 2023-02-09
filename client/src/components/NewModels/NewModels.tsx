import { Phone } from "../../types/Phone";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Card } from "../Card"
import './NewModels.scss'
import { getNew } from "../../api/phones";
import { Navigation } from "swiper";

export const NewModels = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getNew()
      .then(setNewPhones)
      .catch();
  }, []);

  return (
    <div className='new'>
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
        {newPhones.map((phone) => (
          <SwiperSlide>
            <Card phone={phone} key={phone.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}