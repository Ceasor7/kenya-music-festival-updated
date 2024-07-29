import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className=" text-white w-full">
      <div className=" bg-[#733612] flex flex-col md:flex-row gap-8 w-full p-16 justify-center ">
        <div className="m-auto md:w-1/3 ">
          <Image src="/Logo_White.png" alt="KMF Logo" width={200} height={0} />
        </div>

        <div className="mb-4 mt-2 md:mt-0 sm:mb-4 md:w-1/3 text-center md:text-start">
          <h2 className="text-xl font-semibold font-custom mb-6">
            Quick Links
          </h2>
          <ul className="text-sm">
            <li className="mb-2 font-custom">
              <a href="/">Home</a>
            </li>
            <li className="mb-2 font-custom">
              <a href="/about">About Us</a>
            </li>
            <li className="mb-2 font-custom">
              <a href="/partnership">Partnership</a>
            </li>
            <li className="mb-2 font-custom">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:text-start text-center md:w-1/3">
          <div>
            <h2 className="text-xl font-semibold font-custom mb-6 just md:ml-3">
              Follow Us
            </h2>
          </div>
          <div className="flex md:justify-start justify-center">
            <SocialIcon
              url="https://x.com/kmf_kenya"
              fgColor="white"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://instagram.com/kenya_musical_festival"
              fgColor="white"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://youtube.com/Kenya_Musical_FesticalTV"
              fgColor="white"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://facebook.com/kenya_musical_festival"
              fgColor="white"
              bgColor="transparent"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#894030] w-full p-3 flex flex-row justify-center text-white text-center">
        <p>&copy; {currentYear} Kenya Music Festival. All rights reserved.</p>
      </div>
      <div className="bg-[#5f2c26] w-full p-5 flex flex-row justify-center text-white text-center">
        <a
          href="https://creativeage.agency/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-red-200"
        >
          <p className="font-custom uppercase">
            A dynamic web application by Creative Age
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
