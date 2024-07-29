'use client'
import CountdownTimer from "@/components/CountdownTimer";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const CountDownClock = () => {

  const targetDate = '2024-08-02T23:59:59';

  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  })

  useEffect(() => {
    scrollYProgress.on("change", e => console.log(e))
  }, [])

  return (
    <div className="relative bg-fixed bg-parallax bg-center md:bg-cover py-24">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative text-white flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-4xl pb-8 uppercase font-bold">KMF 2024</h1>
        </div>
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </div>


  )
}

export default CountDownClock