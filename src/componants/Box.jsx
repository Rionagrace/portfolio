import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { BrowserRouter as Link } from "react-router-dom";

const boxVariant = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	hidden: { opacity: 0, scale: 0 },
};

const Box = ({ project, link, github, image}) => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	return (
		<motion.div
			className="box"
			ref={ref}
			variants={boxVariant}
			initial="hidden"
			animate={control}

		>
			<h1>{project}</h1>
			<button><a href={link} target="_blank">
				Try it out
			</a></button>
			<button><a href={github} target="_blank">GitHub</a></button>
      <img src={image} />
		</motion.div>
	);
};

export default Box;
