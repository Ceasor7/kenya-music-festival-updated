'use client'
import { motion, useScroll } from "framer-motion"
import { useEffect, useRef } from "react"

const Challenges = () => {

  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target: element,
    offset: ['start 0.9','start 0.25']
  })

  useEffect ( () => {
    scrollYProgress.on("change", e=> console.log(e))
  }, [])

  return (
    <motion.div
    ref={element}
    style={{opacity: scrollYProgress}}
     className="flex flex-col mb-5 py-6 px-6 mx-6 lg:mx-20 lg:px-12">
        <h2 className="text-4xl my-6 font-custom font-medium"> Challenges </h2>
        <ul className="mb-3 list-decimal">
            <li className="font-custom mt-2">Funding has been a big problem since the has really expanded.</li>
            <li className="font-custom mt-2e">Some regions not bringing all the winners due to funds</li>
            <li className="font-custom mt-2e">Some of the partners expressing their interest in using KMF as a platform to spread them to the public and once teachers and pupils start preparation at the end they do not honour their agreement of partnership.</li>
        </ul>
        <p className="font-custom leading-relaxed">The festival has continued to grow and we look forward to greater achievements in the Kenyan Music festival.</p>
    </motion.div>
  )
}

export default Challenges