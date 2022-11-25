import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import mypic from '../assets/tathagat_pic.png';
import Link from 'next/link';

type Props = {};

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi,I am Tathagat.",
            "Web & iOS Developer.",
            "Welcome To My Portfolio.",
        ],
        loop: true,
        delaySpeed: 500,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={mypic}
                alt="my picture"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-5 tracking-[15px]'>Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </ h1>
                <div className='pt-5'>
                    <Link href="#about"> <button className='heroButton'>About</button></Link>

                    <Link href="#skills"><button className='heroButton'>Skills</button></Link>

                    <Link href="#projects"><button className='heroButton'>Projects</button></Link>

                </div>
            </div>
        </div>
    );
}