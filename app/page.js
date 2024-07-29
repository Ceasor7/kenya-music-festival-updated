import EmblaCarousel from '@/components/EmblaCarousel.jsx';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
import Navbar from '@/components/Navbar';
import SummaryBackground from '@/components/SummaryBackground';
import CountDownClock from '@/sections/AboutUs';
import Hero from '@/sections/Hero';
import PerformanceVenue from '@/sections/PerformanceVenue';

const OPTIONS = { loop: true };
const IMAGES = [
  '/logos/aca.png',
  '/logos/brooke.png',
  '/logos/cak.png',
  '/logos/cali.png',
  '/logos/equity.png',
  '/logos/jubilee.png',
  '/logos/kicd.png',
  '/logos/kmf.png',
  '/logos/kuccps.png',
  '/logos/kws.png',
  '/logos/moe.png',
  '/logos/sasdf.png',
  '/logos/sepu.png',
  '/logos/tsc.png',
  '/logos/uraia.png',
  '/logos/aakenya.png',
  '/logos/dataprotection.png',
  '/logos/ministryofhealth.png',
];

export default function Home() {
  return (
    <main className="bg-[#FAF9F6]">
      <Navbar />
      <section id="hero">
        <Hero />
        <ImageSlider />
      </section>
      <section>
        <SummaryBackground />
      </section>
      <section id="about" class="relative bg-fixed bg-parallax bg-cover">
        <CountDownClock />
      </section>
      <section id="venues" className="bg-[#36600A]">
        <PerformanceVenue />
      </section>
      <section className="py-8 ">
        <EmblaCarousel images={IMAGES} options={OPTIONS} />
      </section>
      {/* <div>
      <Link href="/contact" className='flex flex-row items-center justify-center space-x-2 sm:hidden'>
      <p className='text-base font-custom'>Get in Touch</p>
      <FaRegEnvelope size={30} />
      </Link>
      </div> */}
      <Footer />
    </main>
  );
}
