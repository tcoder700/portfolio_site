import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({ }: Props) {
    return (
        <header className="sticky top-0 -5 flex items-center max-w-7xl mx-auto xl:items-center">

            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center">
                {/*Social Icons*/}
                <SocialIcon
                    url="https://www.linkedin.com/in/tathagat-v-784564229/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/tcoder700"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://leetcode.com/tcoder700/"
                    fgColor="gray"
                    bgColor="transparent"
                />

                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />

            </motion.div>
        </header>
    );
}