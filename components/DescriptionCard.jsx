
const DescriptionCard = ({ image, title, description, /*buttonLabel */ }) => {
  return (
    <div>
      <div className=' w-50 h-35 flex justify-center items-center'>
        <img src={image} alt={title} className='object-cover w-full' />
      </div>
      <h3 className='font-custom text-2xl leading-normal font-bold text-black'>
      {title}
      </h3>
      <p className='break-words font-custom leading-relaxed text-base text-black'>
      {description}
      </p>
      {/*<div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonLabel}
        </button>
      </div> */}
    </div>
  )
}

export default DescriptionCard