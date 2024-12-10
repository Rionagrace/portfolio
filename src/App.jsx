import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./App.css";
import image from "/Users/rionamccumskay/code projects/portfolio/src/assets/Screenshot 2024-12-10 at 11.20.20.png";

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
			<section className="container">
				<NavBar />
				<motion.section id="home" layout className="landing" whileInView={{ opacity: 1 }}>
					<motion.h1
						whileHover={{ scale: 1.05 }}
						whileInView={{ opacity: 1 }}
						layout
					>
						Hi, my name is Riona
					</motion.h1>
					<motion.button
						layout
						whileHover={{ scale: 1.05 }}
						onClick={handleClick}
					>
						find out more
					</motion.button>
				</motion.section>
				<section id="aboutMe" ref={ref}>
					<AboutMe></AboutMe>
				</section>
				<section id="projects" className="projects">
					<Box
						project="hisTOURy"
						link="https://youtu.be/iO2S5bARsaM"
						github="https://github.com/Rionagrace/NC-final-project"
						image={image}
					/>
					<Box
						project="NC News"
						link="https://nc-news-rm.netlify.app/"
						github="https://github.com/Rionagrace/NC-News-Frontend"
						image="https://private-user-images.githubusercontent.com/177925098/393939837-e5742095-5820-4b4e-8508-6fd5e829763e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM4MzAyNzAsIm5iZiI6MTczMzgyOTk3MCwicGF0aCI6Ii8xNzc5MjUwOTgvMzkzOTM5ODM3LWU1NzQyMDk1LTU4MjAtNGI0ZS04NTA4LTZmZDVlODI5NzYzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIxMFQxMTI2MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZThjMTE2MGJhYjJmMTVjYjJmNTAyMzljOWUyNzQ4ZDNmNjY5OWZhZjZhMjc5NDUxMzU1ZTQzMTZhOGFlODQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.lle1Or0ctalgW_nOeYaunZelg9FaYZDcb1fKC7vfP2M"
					/>
					<Box
						project="Poke-Finder"
						link="https://pokemon-finder-rm.netlify.app/"
						github="https://github.com/Rionagrace/pokemon-finder"
						image="https://private-user-images.githubusercontent.com/177925098/383618843-ecaedac0-7d00-49a4-b175-3bb6345258e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NjUzNDksIm5iZiI6MTczMzc2NTA0OSwicGF0aCI6Ii8xNzc5MjUwOTgvMzgzNjE4ODQzLWVjYWVkYWMwLTdkMDAtNDlhNC1iMTc1LTNiYjYzNDUyNThlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOVQxNzI0MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNTAwN2U5MmE4M2U4MDVlYjE2YjBiMDRiZTJkZWNhNDExN2I5NmU1Zjc5M2UxOWU4ODA3N2FjYzM3NDk4ZjJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AfMnim62une2oWDp0NyoY-UZVqkn3m3-ou9lI0qGUXg"
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
