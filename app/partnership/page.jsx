import EmblaCarousel from '@/components/EmblaCarousel.jsx';
import PartnershipSection from '@/sections/PartnershipSection';

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

const Partnership = () => {
  return (
    <div className="mt-12">
      <section className="mt-16 bg-[#36600A]">
        <PartnershipSection />
      </section>
      <section className="py-8 ">
        <EmblaCarousel images={IMAGES} options={OPTIONS} />
      </section>
    </div>
  );
};

export default Partnership;
