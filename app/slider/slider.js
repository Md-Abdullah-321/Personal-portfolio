import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const ButtonBackground = {
  background: 'rgb(66,29,136)',
  backgroundImage: 'linear-gradient(90deg, rgba(66,29,136,1) 0%, rgba(59,18,135,1) 50%, rgba(0,0,0,0.7) 100%)'
};

export default function ImageSlider({ imageArray }) {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      navigation
      loop
      autoplay={{ delay: 500 }}
      className='w-full relative'
      spaceBetween={30}
      slidesPerView={windowDimensions.width > 768 ? 2 : 1}
      onSlideChange={(swiper) => console.log('Slide changed to: ', swiper.realIndex)}
    >
      {imageArray.map((image, index) => (
        <SwiperSlide key={index} className='w-full transition-all cursor-pointer'>
          <img src={image[0]} alt="" srcSet="" className='w-full rounded-md object-fill border border-violet-200' />
          <div className="absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 rounded-md transition-all group flex justify-center items-center">
            <a className='hidden group-hover:block text-white px-4 py-2 uppercase brightness-125 hover:brightness-150' style={ButtonBackground}>See Details</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
