import { useEffect, useState } from "react";

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
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutMe">About Me</a></li>
          <li> <a href="#projects">Projects</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
			</header>
	);
}

export default NavBar;
