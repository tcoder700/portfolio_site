import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean;
    imageUrl: string;
};
function Skill({ directionLeft,imageUrl }: Props) {
    return (


        <div className='relative flex cursor-pointer'>
              <motion.img
                src={imageUrl}
                className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 transition duration-300 ease-in-out'
            />
        </div>
    )
}

export default Skill;