import github from "/Users/rionamccumskay/code projects/portfolio/src/assets/bdf708f195939ef8e605f16ef67b3fa9.png";
import linkedin from "/Users/rionamccumskay/code projects/portfolio/src/assets/60733ca8cabfadf97b6ddeeb26ad10.png";
import email from "/Users/rionamccumskay/code projects/portfolio/src/assets/ac28ddcbcdcf8e7aaadaeaa341c068dc.png";
import { motion, useAnimation } from "framer-motion";

function Contact() {
	return (
		<section className="contact">
			<h3>Get in Touch</h3>
			<p>
				If you'd like to know more or are interested in working together, please
				get in touch!
			</p>
			<a href="https://github.com/Rionagrace" target="_blank">
				{" "}
				<motion.img
					whileHover={{ scale: 1.05 }}
					src={github}
					className="logo"
				/>{" "}
			</a>
			<a href="https://www.linkedin.com/in/riona-mccumskay/" target="_blank">
				<motion.img
					whileHover={{ scale: 1.05 }}
					src={linkedin}
					className="logo"
				/>{" "}
			</a>
			<a href="mailto:r.mccumskay@gmail.com" target="_blank">
				<motion.img whileHover={{ scale: 1.05 }} src={email} className="logo" />{" "}
			</a>
		</section>
	);
}

export default Contact;
