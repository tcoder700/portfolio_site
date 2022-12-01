import React from 'react'
import { PhoneIcon,EnvelopeIcon,MapPinIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
type Props = {}

export default function Contact({ }: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hover:text-white">
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-2xl font-semibold text-center md:text-4xl mx-10'>
         <Link href="https://drive.google.com/file/d/1xDbh-mAIhRr_AKvmC0UUa5aNqBkfLYQe/view?usp=share_link" className="cursor-pointer hover:text-cyan-200">Click To Download My Resume</Link>
        </h4>
        <div className='pt-5 md:pt-20'>

<div className='flex items-center space-x-5 justify-center pb-5'>
<PhoneIcon className = 'text-[#36e8ee] h-7 w-7 animate-pulse' />
<p className='text-2xl'> +91 9799107725 </p>
</div>

<div className='flex items-center space-x-5 justify-center pb-5'>
<EnvelopeIcon className = 'text-[#36e8ee] h-7 w-7 animate-pulse' />
<p className='text-2xl'> vatstathagat0011@gmail.com </p>
</div>

<div className='flex items-center space-x-5 justify-center pb-5'>
<MapPinIcon className = 'text-[#36e8ee] h-7 w-7 animate-pulse' />
<p className='text-2xl'> New Delhi,India </p>
</div>

        </div>
      </div>
    </div>
  )
}