import AboutDescriptionCard from './AboutDescriptionCard';

const Dates = () => {
  return (
    <div className="flex flex-col mt-16 mb-10 mx-6 lg:mx-20 px-6 lg:px-12">
      <h2 className="mb-16 font-custom text-4xl lg:text-center font-semibold text-white">
        Activities<span className="text-white"> </span>
      </h2>
      <div className="mt-5 grid text-white lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-14">
        <AboutDescriptionCard
          image="/writersworkshop.png"
          title="Writers workshop"
          description="In November/December, there is usually the Writers’ Workshop to select set-pieces in music and elocution for the next year’s music festival and amend the guidelines to be used. Partners are invited to give the messages they wish to communicate to the society to be included in the guidelines during they writers workshop. Guidelines are developed and are always ready for circulation to all schools in Kenya in February every year. "
          //buttonLabel="Apply Here"
        />
        <AboutDescriptionCard
          image="/adjworkshop.png"
          title="Adjudicators and trainers workshop"
          description="This workshop brings together adjudicators and trainers for capacity building and harmonization of themes and messages.  Partner/sponsors are given time to talk to the adjudicators and give them their expectations.   It also makes the participants analyze set pieces and the syllabus.   "
          //buttonLabel="Apply Here"
        />
        <AboutDescriptionCard
          image="/competition.png"
          title="Competition"
          description="The competition proceeds through various stages beginning from the preliminary (Zonal Level) held in the month of May, through to the Sub-County, County, Regional and culminating at the National festival held annually in August."
          //buttonLabel="Apply Here"
        />
      </div>
    </div>
  );
};

export default Dates;
