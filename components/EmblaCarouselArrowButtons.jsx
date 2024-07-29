import React from 'react';

export const PrevButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="embla__button embla__button--prev"
  >
    Prev
  </button>
);

export const NextButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="embla__button embla__button--next"
  >
    Next
  </button>
);

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick: () => emblaApi.scrollPrev(),
    onNextButtonClick: () => emblaApi.scrollNext(),
  };
};
