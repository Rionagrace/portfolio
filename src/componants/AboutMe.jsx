import { motion, useAnimation } from "framer-motion";
import CV from "/Users/rionamccumskay/code projects/portfolio/src/assets/Riona McCumskay - CV - Junior Software Developer.pdf"

function AboutMe(){
  return (
    <motion.section className="aboutMe" layout>
    <motion.h2 layout>About Me</motion.h2>
    <motion.p layout>Hello! Thank you for stopping by my portfolio. I'm a Northcoders software development bootcamp graduate, with with 7 years experience producing programming for television in my previous life.  Making the career change to software development as it is an area I’ve always been interested in since I coded my first maze game in high school and I enjoy using my creative problem solving skills to find solutions to development problems. I'm passionate about the environment and making the world a better place through code. </motion.p>
 
    <button> <a  href={CV} target="_blank">CV</a></button>
    </motion.section>
  )
}

export default AboutMe