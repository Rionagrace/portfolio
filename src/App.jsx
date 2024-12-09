import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./App.css";

import Box from "./componants/Box";
import AboutMe from "./componants/AboutMe";

function App() {
	const [aboutMe, setAboutMe] = useState(false);

	function handleClick() {
		setAboutMe(!aboutMe);
	}

	return (
		<>
			<section className="container">
				<motion.section layout className="landing" whileInView={{ opacity: 1 }}>
					<motion.h1
						whileHover={{ scale: 1.05 }}
						whileInView={{ opacity: 1 }}
						layout
					>
						Hi, my name is Riona
					</motion.h1>
					<motion.button layout whileHover={{ scale: 1.05 }} onClick={handleClick}>
						{aboutMe ? "hide about me" : "About Me"}
					</motion.button>
					{aboutMe && <AboutMe></AboutMe>}
				</motion.section>
				<section className="projects">
					<Box project="hisTOURy" link="https://youtu.be/iO2S5bARsaM" github="https://github.com/Rionagrace/NC-final-project"  />
					<Box project="NC News" link="https://nc-news-rm.netlify.app/" github="https://github.com/Rionagrace/NC-News-Frontend" image="https://private-user-images.githubusercontent.com/177925098/393939837-e5742095-5820-4b4e-8508-6fd5e829763e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NjU4OTYsIm5iZiI6MTczMzc2NTU5NiwicGF0aCI6Ii8xNzc5MjUwOTgvMzkzOTM5ODM3LWU1NzQyMDk1LTU4MjAtNGI0ZS04NTA4LTZmZDVlODI5NzYzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOVQxNzMzMTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMWQ5MWIyOGU5ZTlkM2Y4MDQ2NzM4NGEwNGVkMjZmZjYzNzJiZTQ3N2Q5YTA3NDZjYzUxNGIxMDIxN2U3ZTI2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ACxoILAq1ZpnrOSaR9FGNk-GZuwMar_Px4zCudNNHcc"/>
					<Box project="Poke-Finder" link="https://pokemon-finder-rm.netlify.app/" github="https://github.com/Rionagrace/pokemon-finder" image="https://private-user-images.githubusercontent.com/177925098/383618843-ecaedac0-7d00-49a4-b175-3bb6345258e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM3NjUzNDksIm5iZiI6MTczMzc2NTA0OSwicGF0aCI6Ii8xNzc5MjUwOTgvMzgzNjE4ODQzLWVjYWVkYWMwLTdkMDAtNDlhNC1iMTc1LTNiYjYzNDUyNThlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOVQxNzI0MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNTAwN2U5MmE4M2U4MDVlYjE2YjBiMDRiZTJkZWNhNDExN2I5NmU1Zjc5M2UxOWU4ODA3N2FjYzM3NDk4ZjJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AfMnim62une2oWDp0NyoY-UZVqkn3m3-ou9lI0qGUXg" />
				</section>
				<section className="landing"></section>
			</section>
		</>
	);
}

export default App;
