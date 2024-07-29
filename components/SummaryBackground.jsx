'use client'
import { motion } from "framer-motion"
const SummaryBackground = () => {
  return (
    <motion.div
      initial={{
        y: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      className="flex flex-col py-32 mb-5 mx-5 px-6 lg:mx-20 lg:px-12">
      <h1 className=" mb-16 font-custom text-4xl lg:text-center font-semibold">Background</h1>
      <div className="flex flex-col sm:flex-row sm:space-x-10 ">
        <div className="flex items-center">
          <p className="font-custom leading-relaxed text-left sm:text-center">
            The Kenya Music Festival (KMF) is an annual talent development initiative overseen by the Ministry of Education and regarded as the largest festival of its kind in East and Central Africa. With over 600 competitive categories spanning music, dance, and elocution, it attracts more than 3 million participants from educational institutions nationwide, serving as a platform to instill positive values and address societal issues among the youth. His Excellency, The President of the Republic of Kenya, serves as the festival's Patron, while an Executive Committee appointed by the Cabinet Secretary manages its affairs, with technical support from the Directorate for Field Coordination and Co-curricular Activities. Since 1948, preliminary performances have been held at district (now county) and provincial (now regional) venues, culminating in a national event initially held at the Kenya National Theatre and later at the KICC in Nairobi. However, starting in 2006, the national level has been rotated among different regions to broaden accessibility.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default SummaryBackground