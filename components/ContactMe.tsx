import React from 'react'
import { PhoneIcon,EnvelopeIcon,MapPinIcon } from '../node_modules/@heroicons/react/20/solid';
type Props = {}

export default function Contact({ }: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          You have reached the last section of my portfolio
        </h4>
        <div>

<div className='flex items-center space-x-5 justify-center pb-5'>
<PhoneIcon className = 'text-[#F7AB0A] h-7 w-7 animate-pulse' />
<p className='text-2xl'> +91XXXXXXXXX </p>
</div>

<div className='flex items-center space-x-5 justify-center pb-5'>
<EnvelopeIcon className = 'text-[#F7AB0A] h-7 w-7 animate-pulse' />
<p className='text-2xl'> tathagat123@email.com </p>
</div>

<div className='flex items-center space-x-5 justify-center pb-5'>
<MapPinIcon className = 'text-[#F7AB0A] h-7 w-7 animate-pulse' />
<p className='text-2xl'> New Delhi,India </p>
</div>

        </div>
      </div>
    </div>
  )
}