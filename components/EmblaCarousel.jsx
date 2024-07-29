'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

const EmblaCarousel = ({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    if (!autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [emblaApi]);

  return (
    <div>
      <h2 className="mb-16 font-custom text-4xl lg:text-center font-semibold">
        Partners
      </h2>
      <div className="overflow-hidden w-full h-[100px]">
        <div className="overflow-hidden w-full flex" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div
                className="relative min-w-[15%] flex justify-center items-center"
                key={index}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="block w-auto h-[60px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;