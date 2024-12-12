import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";

import SQL from "/Users/rionamccumskay/code projects/portfolio/src/assets/logos carosel/921412084bbd794a2930407d55a6b054.png";
import JS from "/Users/rionamccumskay/code projects/portfolio/src/assets/logos carosel/a8c8d6a8b13acc84866d38923fd976.png";
import react from "/Users/rionamccumskay/code projects/portfolio/src/assets/logos carosel/e275f4a7b68a9b6d3a86abeadb5e0a09.png";
import HTML from "/Users/rionamccumskay/code projects/portfolio/src/assets/logos carosel/kisspng-computer-icons-uniform-resource-locator-html-icon-5b3230cfeb9046.8785070415300159519649.png";
import CSS from "/Users/rionamccumskay/code projects/portfolio/src/assets/logos carosel/kisspng-document-file-format-template-computer-icons-5b322a2cc8de71.3536600015300142528228.png";
import agile from "/Users/rionamccumskay/code projects/portfolio/src/assets/logos carosel/kisspng-logo-organization-behance-computer-icons-design-all-prior-events-starweaver-5ba30468b40b40.5327594615374101527375.png";

export default function Carosel() {
	const logos = [SQL, JS, react, HTML, CSS, agile];
  const repeatedLogos = [...logos, ...logos, ...logos];

	let [ref, { width }] = useMeasure();

	let xtranslation = useMotionValue(0);

	useEffect(() => {
   const logoWidth = window.innerWidth * 0.08

		let controls;
		const gap = 20;
		const totalLogosWidth = repeatedLogos.length * (logoWidth + gap);
		const finalPosition = -totalLogosWidth / 3; 

		controls = animate(xtranslation, [0, finalPosition], {
			ease: "linear",
			duration: 25,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});
		return controls.stop;
	}, [xtranslation, width, repeatedLogos.length]);

	return (
		<motion.section className="carosel" ref={ref} style={{ x: xtranslation }}>
			{repeatedLogos.map((item, index) => (
				<img src={item} key={index} className="logo" />
			))}
		</motion.section>
	);
}
