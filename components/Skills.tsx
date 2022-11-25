import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
type Props = {}

export default function Skills({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex relative flex-col text-center md:text-left x:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>
            <div className='grid grid-cols-4 gap-5 pt-5'>
                <Skill imageUrl='https://cdn-icons-png.flaticon.com/128/732/732212.png'/>
                <Skill imageUrl='https://cdn-icons-png.flaticon.com/128/732/732190.png'/>
                <Skill imageUrl='https://cdn-icons-png.flaticon.com/128/5968/5968292.png'/>
                <Skill imageUrl='https://cdn-icons-png.flaticon.com/128/919/919825.png'/>
                <Skill imageUrl='https://cdn-icons-png.flaticon.com/128/1126/1126012.png'/>
                <Skill imageUrl='https://cdn-icons-png.flaticon.com/128/5968/5968381.png'/>
                <Skill imageUrl='https://cdn-icons-png.flaticon.com/128/5968/5968371.png'/>
                <Skill imageUrl='https://cdn-icons-png.flaticon.com/128/6132/6132222.png' />

            </div>
        </ motion.div>
    )
}