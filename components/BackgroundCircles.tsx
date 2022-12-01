import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.2, 0.4, 0.8, 1, 0.5],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 1.5,
            }}
            className='relative flex justify-center items-center'>

            <div className='absolute border border-[#2bdeee] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
            <div className='absolute border border-[#eee8e8] rounded-full h-[300px] w-[300px] opacity-10 mt-52' />
            <div className='absolute border border-[#f1ecec] rounded-full h-[500px] w-[500px] opacity-20 mt-52 ' />
            <div className='absolute border border-[#36e8ee] rounded-full h-[650px] w-[650px] opacity-30 mt-52 animate-pulse' />
            <div className='absolute border border-[#f2eeee] rounded-full h-[800px] w-[800px] opacity-20 mt-52 '  />
        </motion.div>
    )
}