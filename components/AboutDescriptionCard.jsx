
const AboutDescriptionCard = ({image, title, description,}) => {
  return (
    <div>
    <div className=' w-50 h-35 flex rounded-2xl justify-center items-center'>
      <img src={image} alt={title} className='object-cover w-full' />
    </div>
    <h3 className='mt-5 font-custom text-2xl leading-normal font-bold text-white'>
    {title}
    </h3>
    <p className='mt-3 break-words font-custom leading-relaxed text-base text-white'>
    {description}
    </p>
  </div>
  )
}

export default AboutDescriptionCard