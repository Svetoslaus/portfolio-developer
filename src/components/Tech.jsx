import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaPython } from "react-icons/fa"
import { DiJava } from "react-icons/di"
import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoSpringBoot } from "react-icons/bi"
import { DiDocker } from "react-icons/di"
import { motion } from "framer-motion"

const iconAction = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
       <motion.h2 
       whileInView={{opacity: 1, y: 0}}
       initial={{ opacity: 0, y: -100}}
       transition={{ duration: 1.5 }}
       className="my-20 text-center text-4xl">
        Technologies
       </motion.h2>
       <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconAction(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconAction(5.5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconAction(4.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconAction(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-600"/>
            </motion.div>
            <motion.div
            variants={iconAction(4.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div 
            variants={iconAction(5.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoSpringBoot className="text-7xl text-green-300"/>
            </motion.div>
            <motion.div
            variants={iconAction(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-400-blue-200"/>
            </motion.div>
            <motion.div
            variants={iconAction(4.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div
            variants={iconAction(4.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiDocker className="text-7xl text-sky-400"/>
            </motion.div>
       </div>
    </div>
  )
}

export default Tech
