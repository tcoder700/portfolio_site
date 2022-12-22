import Link from 'next/link';
import React from 'react'
import image1 from '../assets/chatbot_p1.png'
import image2 from '../assets/Screenshot 2022-12-22 at 5.52.49 PM.png'
import image3 from '../assets/Simon_p3.png'
import image4 from '../assets/Simulator Screen Shot - iPhone 12 Pro - 2022-12-22 at 17.45.14.png'

import Project from './Project';
type Props = {}

function Projects({ }: Props) {
    
    return (
       <div>
        <h2 className='tracking-[15px] text-2xl text-center text-gray-600 mx-auto mb-24 '>PROJECTS</h2>
            <div className='md:flex md:flex-row  grid md:gap-5 px-5'>
 <Project imageUrl={image1} siteLink="https://boisterous-begonia-013aac.netlify.app/" content="A real-time functional chat-app"  techStack='Firebase || ReactJS || TailwindCSS'/>
 <Project imageUrl={image2} siteLink="https://drive.google.com/file/d/1cjDufbbATyQ5ZS8ltpuT-aUpNOlCuA1b/view?usp=sharing" content="A Quiz Based iOS App"  techStack='Swift || Objective-C || Xcode'/>
 <Project imageUrl={image3} siteLink="https://simon-game-tv.netlify.app/" content="A web based dice game"  techStack='Javascript || Css || HTML'/>
 </div>
 </div>
     
    )
}

export default Projects