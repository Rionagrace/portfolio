import { useEffect, useState } from "react";

import {motion} from "framer-motion"

function NavBar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
			<header className={`navbar ${isScrolled ? "visible" : ""}`}>
				<ul className="nav-Bar">
          <motion.li whileHover={{ scale: 1.05 }}><a href="#home">Home</a></motion.li>
          <motion.li whileHover={{ scale: 1.05 }}><a href="#aboutMe">About Me</a></motion.li>
          <motion.li whileHover={{ scale: 1.05 }}> <a href="#projects">Projects</a></motion.li>
          <motion.li whileHover={{ scale: 1.05 }}><a href="#contact">Contact</a></motion.li>
        </ul>
			</header>
	);
}

export default NavBar;
