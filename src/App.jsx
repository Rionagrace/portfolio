import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./App.css";
import image from "/Users/rionamccumskay/code projects/portfolio/src/assets/Screenshot 2024-12-10 at 11.20.20.png";
import pokemon from "/Users/rionamccumskay/code projects/portfolio/src/assets/383618843-ecaedac0-7d00-49a4-b175-3bb6345258e4.png"
import news from "/Users/rionamccumskay/code projects/portfolio/src/assets/393939837-e5742095-5820-4b4e-8508-6fd5e829763e.png"

import Box from "./componants/Box";
import AboutMe from "./componants/AboutMe";
import { useRef } from "react";
import NavBar from "./componants/NavBar";
import Contact from "./componants/Contact";

function App() {
	const ref = useRef(null);

	function handleClick() {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<>
		<NavBar />
			<section className="container">
				<motion.section id="home" layout className="landing" whileInView={{ opacity: 1 }}>
					<motion.h1
						whileHover={{ scale: 1.05 }}
						whileInView={{ opacity: 1 }}
						layout
					>
						Hi, my name is Riona
					</motion.h1>
          <motion.h2>
            I'm a junior Software Developer from Manchester
          </motion.h2>
					<motion.button
						layout
						whileHover={{ scale: 1.05 }}
						onClick={handleClick}
					>
						find out more
					</motion.button>
				</motion.section>
				<section ref={ref}>
					<AboutMe></AboutMe>
				</section>
				<h1 id="projects">Projects</h1>
				<section  className="projects">
					<Box
						project="hisTOURy - build your own guided tour"
						link="https://youtu.be/iO2S5bARsaM"
						github="https://github.com/Rionagrace/NC-final-project"
						image={image}
					/>
					<Box
						project="NC News - mimicks a real news site"
						link="https://nc-news-rm.netlify.app/"
						github="https://github.com/Rionagrace/NC-News-Frontend"
						image={news}
					/>
					<Box
						project="Poke-Finder - search for your favourite Pokemon"
						link="https://pokemon-finder-rm.netlify.app/"
						github="https://github.com/Rionagrace/pokemon-finder"
						image={pokemon}
					/>
				</section>
				<section id="contact" className="landing">
          <Contact/>
        </section>
			</section>
		</>
	);
}

export default App;
