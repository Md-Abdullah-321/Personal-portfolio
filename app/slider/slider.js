import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const ButtonBackground = {
  background: 'rgb(66,29,136)',
  backgroundImage: 'linear-gradient(90deg, rgba(66,29,136,1) 0%, rgba(59,18,135,1) 50%, rgba(0,0,0,0.7) 100%)'
};

const shadow = {
  boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
}

export default function ImageSlider({projects}) {
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
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        slidesPerView={windowDimensions.width > 768 ? 2 : 1}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="min-h-80"
      >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className='w-full transition-all cursor-pointer rounded-md min-h-80' style={shadow}>
          <Image src={project.projectImages[Math.floor(Math.random() * 5)]} alt="" srcSet="" className='w-full rounded-md object-cover object-center self-center border border-violet-200 overflow-clip' width={1920} height={1080}/>
          <div className='fixed bottom-0 h-20 bg-violet-100 opacity-90 w-full text-start p-4 text-sm flex flex-col justify-center'>
            <p className='font-semibold mr-2'>Project Name : <span className='text-violet-700 capitalize'>  {project.title}</span>
            </p>
            <p><span className='font-semibold'>FrontEnd :</span>
            {project.frontEnd.map((tech, index) => <span className='mx-1'>{tech}{index < project.frontEnd.length - 1? ",": ""}</span>)}
            </p>
            <p><span className='font-semibold'>BackEnd :</span>
            {project.backEnd.map((tech, index) => <span className='mx-1'>{tech} {index < project.backEnd.length - 1? ",": ""}</span>)}
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 rounded-md transition-all group flex justify-center items-center">
            <Link href={{
              pathname: `./projectDetails`,
              query: {
                id: project._id,
              }
            }} className='hidden group-hover:block text-white px-4 py-2 uppercase brightness-125 hover:brightness-150' style={ButtonBackground}>See Details</Link>
          </div>
        </SwiperSlide>
      ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
