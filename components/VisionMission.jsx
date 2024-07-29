
const VisionMission = ({title, description}) => {
  return (
    <div>
      <h3 className='mt-5 font-custom text-2xl leading-normal font-bold text-black'>
      {title}
      </h3>
      <p className='mt-3 break-words font-custom leading-relaxed text-base text-black'>
      {description}
      </p>
    </div>
  )
}

export default VisionMission