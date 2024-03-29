import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-20 rounded-tr-2xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-500 gap-10 flex overflow-hidden whitespace-nowrap'>
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[19vw] leading-none uppercase -mb-[1vw] pt-10 font-["Founders_Grotesk_X_Condensed"] font-semibold'>
                We are ochi
                </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[19vw] leading-none uppercase -mb-[1vw] pt-10 font-["Founders_Grotesk_X_Condensed"] font-semibold'>
                We are ochi
                </motion.h1>
        </div>
    </div>
  );
}

export default Marquee
