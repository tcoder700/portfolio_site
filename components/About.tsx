
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import mypic from '../assets/tathagat_pic.png'
type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            {/*on a phone it would be a column arranged content while on the medium screen content will be row arranged*/}
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
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
                className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64'
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className='text-4xl font-semibold'>
                    Who am I ?
                </h4>
                <p className='text-base'>
                    Hey, i am Tathagat.
                    I am an Electrical Engineering sophomore at JMI,New Delhi and have keen interest in web development.
                    I get fascinated about how things are working in the web that motivates me
                    to be consistent and learn something new everyday.
                    Besides Full Stack Web Development and iOS development , i also practice Leetcode to sharpen
                    my data structures and algorithms' skill.
                </p>
            </div>
        </div>

    )
}