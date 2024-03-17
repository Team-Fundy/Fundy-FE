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
