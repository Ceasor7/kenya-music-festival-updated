import Dates from '@/components/Dates';
import FestivalMotto from '@/components/FestivalMotto';
import FestivalObjectives from '@/components/FestivalObjectives';
import FullBackground from '@/components/FullBackground';
import VisionMission from '@/components/VisionMission';
import Achievement from '@/sections/Achievement';

const AboutUs = () => {
  return (
    <div className="flex flex-col bg-[#fffaf3] pt-32">
      <div className="text-center font-semibold text-5xl mt-8">
        <h1>About KMF</h1>
      </div>
      <div className="flex flex-col text-center mb-16 mt-20 sm:flex-row justify-between sm:mx-20 gap-12">
        <div className="rounded-lg shadow-lg px-10 py-10">
          <VisionMission
            title="Vision"
            description="To be the leading global establishment in the provision of quality training in the art forms of Music, Dance and Elocution."
          />
        </div>
        <div className="rounded-lg shadow-lg px-10 py-10">
          <VisionMission
            title="Mission"
            description="To identify, harness, nurture and expose talent and creativity through the art forms of Music, Dance and Elocution."
          />
        </div>
      </div>
      <div className="relative bg-fixed bg-parallax2 bg-cover px-10 py-10 mb-5">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <FestivalMotto />
        </div>
      </div>
      <div>
        <FullBackground />
      </div>
      <div className="bg-[#36600A]">
        <FestivalObjectives />
      </div>
      <div>
        <Achievement />
      </div>
      <div className="bg-[#36600A]">
        <Dates />
      </div>
      <div>
        {/* <Link href="/contact" className="flex flex-row items-center justify-center space-x-2 sm:hidden">
          <p className="text-base font-custom">Get in Touch</p>
          <FaRegEnvelope size={30} />
        </Link> */}
      </div>
    </div>
  );
};

export default AboutUs;
