import Image from 'next/image';
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ImageSlider({imageArray}) {
  return <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          >
        {
          imageArray.map((images, index) => {
            return <SwiperSlide key={index}>
              <Image
                src={images[0]}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </SwiperSlide>
          })
        }
  </Swiper>

}
