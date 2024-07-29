'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  '/Hero2.jpg',
  '/Hero1.jpg',
  '/Hero5.jpg',
  '/Hero4.jpg',
  '/Hero3.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 6000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen">
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="flex justify-center"
      />
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prevImage}>
          <FaArrowLeft className="h-8 w-8 text-white/60" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={nextImage}>
          <FaArrowRight className="h-8 w-8 text-white/60" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
