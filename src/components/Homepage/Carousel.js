'use client';
import React from 'react';
import { Roboto } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {
  return (
    <div className='happy_customer_slider'>

      <div className="container mx-auto py-10">
        {/* <div className='row justify-content-center align-tems-center'>
          <div className='col-7 text-center'>
            <h3 className={`${roboto.className} slider_heading fw-bold`}>Our Happy Cutomar</h3>
            <p className={`${roboto.className} slider_sub_heading`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, 
              nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. 
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div> 

        </div> */}
         {/* autoplay={{
              delay: 2500, // Delay between transitions (ms)
              disableOnInteraction: false, // Keep autoplay running even when user interacts
            }} */}
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          {[...Array(5)].map((_, i) => (
            <SwiperSlide key={i} className='swiper_slide_container'>
                <div className="rounded bg-white  p-4 d-flex flex-column align-items-center slider_card">
                  <div className='profile_img rounded-circle position-relative'>
                    <Image className="rounded-circle" src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`} alt={`nature-${i + 1}`} fill   style={{ objectFit: "contain" }} />
                  </div>

                    <h1 className="text-2xl font-bold text-center">Ann Lubin + ${i}</h1>
                    <h3 className="text-2xl font-bold text-center">Co-Founder</h3>
                    <p className="text-center card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  );
}
