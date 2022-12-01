
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import mypic from '../assets/tathagat_pic.png'
type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            {/*on a phone it would be a column arranged content while on the medium screen content will be row arranged*/}
            <h3 className='absolute top-24 bottom-24 uppercase text-gray-500 text-2xl hover:text-cyan-400 '>
                About
            </h3>

           
            <motion.img
                initial={{
                    x: -200
                }}
                whileInView={{
                    x: 0
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.5
                }}
                src="https://i.postimg.cc/BnmkSBWD/Screenshot-2022-11-25-at-5-42-28-AM.png"
                alt="my picture"
                className='relative top-36 md:top-0 sm:mt-20 mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-64 md:h-54 md:rounded-lg border border-cyan-100'
            />
            
            <div className="space-y-10 px-0 md:px-10">
                <h4 className='text-2xl font-semibold md:text-4xl' >
                    Who <span  className='text-cyan-300'>am </span>I ?
                </h4>
                <p className='text-base'>
                    Hey, i am<span className='text-cyan-300'> Tathagat</span>.
                    I am an Electrical Engineering sophomore at <span className='text-cyan-300'>JMI,New Delhi</span> and have keen interest in web development.
                    I get fascinated about how things are working in the web that motivates me
                    to be consistent and learn something new everyday.
                    Besides <span className='text-cyan-300'>Full Stack Web Development </span>and <span className='text-cyan-300'>iOS development</span> , i also practice Leetcode regularly to sharpen
                    my skill of data structures and algorithm.
                </p>
            </div>
        </div>

    )
}