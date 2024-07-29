import { useRouter } from 'next/navigation';
import Button from './button';

const Theme = () => {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/about');
  };
  return (
    <div className="mx-6 text-lg mb-4  lg:mb-0">
      <p className="font-custom text-lg">
        <span className="font-bold text-[#D82026]">THEME:</span> Talent
        Development for the Growth of Creative Economy.
      </p>
      <div className=" flex flex-col">
        <div>
          <p className=" font-semibold font-custom py-6">
            {' '}
            2 <sup>nd</sup> - 14 <sup>th</sup> August 2024 <br />
            <span className="text-[#D82026]"> Moi Girls Eldoret</span>{' '}
          </p>
        </div>
        <div className="">
          <Button onClick={handleLearnMore} className="font-custom">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
