import Link from 'next/link';
import React from 'react'
import image1 from '../assets/chatbot_p1.png'
import image2 from '../assets/MemeBoard_p2.png'
import image3 from '../assets/Simon_p3.png'

import Project from './Project';
type Props = {}

function Projects({ }: Props) {
    
    return (
       <div>
        <h2 className='tracking-[15px] text-2xl text-center text-gray-600 mx-auto mb-24 '>PROJECTS</h2>
            <div className='md:flex md:flex-row  grid md:gap-5 px-5'>
 <Project imageUrl={image1} siteLink="https://boisterous-begonia-013aac.netlify.app/" content="A real-time functional chat-app"  techStack='Firebase || ReactJS || TailwindCSS'/>
 <Project imageUrl={image2} siteLink="https://boisterous-begonia-013aac.netlify.app/" content="Plays different meme sounds"  techStack='Jquery || Javascript || CSS'/>
 <Project imageUrl={image3} siteLink="https://simon-game-tv.netlify.app/" content="A web based dice game"  techStack='Javascript || Css || HTML'/>
 </div>
 </div>
     
    )
}

export default Projects