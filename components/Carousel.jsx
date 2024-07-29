
const LOGO_IMAGES = [
  '/KMF.jpg',
  '/KMF1.jpg',
  '/KMF2.jpg',
  '/KMF3.jpg',
  '/KMF4.jpg',
  '/KMF5.jpg',
  '/KMF6.jpg',
  '/KMF7.jpg',
  '/KMF8.jpg',
  '/KMF9.jpg',
];

export const InfiniteSlider = () => {
  return (
    <div className="relative m-auto sm:w-[980px] w-[300px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-[''] pb-8">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGO_IMAGES.map((imageUrl, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center"
            key={index}
          >
            <img
              src={imageUrl}
              alt={`Logo ${index + 1}`}
              className="w-30 h-24 text-slate-800"
              loading="lazy" 
            />
          </div>
        ))}
        {LOGO_IMAGES.map((imageUrl, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center"
            key={index + LOGO_IMAGES.length}
          >
            <img
              src={imageUrl}
              alt={`Logo ${index + 1}`}
              className="w-30 h-24 text-slate-800"
              loading="lazy" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};
