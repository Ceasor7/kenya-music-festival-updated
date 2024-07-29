'use client'
import { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex items-center justify-center space-x-8">
      <div className="text-center">
        <div className="text-base sm:text-2xl font-custom">Months</div>
        <div className="font-bold text-4xl font-custom">{timeLeft.months}</div>
      </div>
      <div className="text-center">
        <div className="text-base sm:text-2xl font-custom">Days</div>
        <div className="font-bold text-4xl font-custom">{timeLeft.days}</div>
      </div>
      <div className="text-center">
        <div className="text-base sm:text-2xl font-custom">Hours</div>
        <div className="font-bold text-4xl font-custom">{timeLeft.hours}</div>
      </div>
      <div className="text-center">
        <div className="text-base sm:text-2xl font-custom">Minutes</div>
        <div className="font-bold text-4xl font-custom">{timeLeft.minutes}</div>
      </div>
      <div className="text-center">
        <div className="text-base sm:text-2xl font-custom">Seconds</div>
        <div className="font-bold text-4xl font-custom">{timeLeft.seconds}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
