import DescriptionCard from "@/components/DescriptionCard"

const Festival = () => {
    return (
      <div className="min-h-screen flex justify-center flex-wrap gap-9 py-2 px-12 my-1 scroll-smooth ">
      <div className='flex flex-col justify-center text-center gap-6'>
          <h2 className='text-4xl tracking-[20px] font-custom font-medium text-[#D82026]'>
          Gallery
        </h2>
      </div>
      <div className="mt-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        <DescriptionCard />
        <DescriptionCard />
        <DescriptionCard />
        <DescriptionCard />
      </div>
  </div>
     
    )
  }
  
  export default Festival