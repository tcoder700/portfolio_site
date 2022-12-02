import React from 'react'
import Image
, { StaticImageData } from 'next/image'
type Props = {
    imageUrl: string | StaticImageData ;
    siteLink: string;
    content: string;
    techStack:string;
}

export default function Project({imageUrl,siteLink,content,techStack}: Props) {
  return (
    <section className="flex justify-center py-8">
    <div className="card-container">
      <a href={siteLink}>
        <div className="card dark:bg-gray-900 rounded-xl px-4 border border-gray-300 hover:border-gray-300 transition duration-100 transform hover:-translate-y-2 hover:scale-100">
          
          <h2 className="text-black dark:text-white w-64 font-bold leading-6 tracking-normal py-4">{content}</h2>
          <p className="text-gray-500 text-sm">{techStack}</p>
          <div className="img-container pb-8">
            <Image src={imageUrl} className="h-44 rounded-md shadow-lg mt-4" alt="project-1" />
          </div>
        </div>
      </a>
    </div>
  </section>
  )
}