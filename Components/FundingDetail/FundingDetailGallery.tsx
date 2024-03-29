import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface FundingDetailGalleryProps {
  images: string[];
}

const FundingDetailGallery: React.FC<FundingDetailGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      {/* 메인 이미지 슬라이더 */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        autoplay={{delay: 2500, disableOnInteraction: false}}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Gallery image ${index}`} width={300} height={100} layout="responsive"/>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 썸네일 슬라이더 */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Thumbnail ${index}`}  width={100} height={75} layout="responsive" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FundingDetailGallery;
