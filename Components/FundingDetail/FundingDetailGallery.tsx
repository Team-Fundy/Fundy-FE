// import Image from 'next/image';
// import React, { useRef, useState } from 'react';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperClass } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// interface FundingDetailGalleryProps {
//   images: string[];
// }

// const FundingDetailGallery: React.FC<FundingDetailGalleryProps> = ({ images }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

//   return (
//     <>
//       {/* 메인 이미지 슬라이더 */}
//       <Swiper
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <Image src={image} alt={`Gallery image ${index}`} width={500} height={300} layout="responsive"/>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* 썸네일 슬라이더 */}
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <Image src={image} alt={`Thumbnail ${index}`}  width={100} height={75} layout="responsive" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default FundingDetailGallery;
{/* Todo: 1. getStaticPaths is not a function 에러를 해결 못했음 그로인해 주석 처리합니다. */ }
{/* Todo: 2. 해결하려 했으나 imports 에러 발생, 진행 중지합니다. */ }

{/* Todo: 아래의 코드는 이미지 목업 파일입니다. */ }

import Image, { ImageProps } from 'next/image';
import React from 'react';

interface FundingDetailGalleryProps {
  images: string[];
}

const FundingDetailGallery: React.FC<FundingDetailGalleryProps> = ({ images }) => {
  const handleImageClick = (image: string) => {
    console.log("Selected image:", image);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <Image 
          src={images[0]} 
          alt="Main Image" 
          width={500}
          height={300}
          className="rounded-lg" 
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Image 
            key={index} 
            src={image} 
            alt={`Gallery Image ${index}`}
            width={125}
            height={75}
            onClick={() => handleImageClick(image)}
            className="rounded-lg cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default FundingDetailGallery;