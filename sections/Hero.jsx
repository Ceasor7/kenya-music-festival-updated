'use client';
import Theme from '@/components/Theme';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <main className="mb-6 flex mt-20 justify-center px-6">
      <div className="flex flex-col ">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 1,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.8 }}
          className="flex flex-col sm:space-x-20 sm:p-8 sm:mb-14 sm:flex-row"
        >
          <div className="flex flex-col justify-center text-center mb-6 md:mb-0 p-6">
            <h1 className="text-left text-5xl font-medium tracking-[2px]">
              Kenya Music <br />
              <span>Festival 2024</span>
            </h1>
          </div>
          <div className="h-full border-r-4 border-[#D82026]"></div>
          <Theme />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 1,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.8 }}
          className="flex items-center justify-center"
        ></motion.div>
      </div>
    </main>
  );
}
