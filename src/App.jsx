import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./App.css";

function App() {

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Box = ({ num }) => {

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
      <h1>Box {num} </h1>
    </motion.div>
  );
};


	return (
		<>
			<section className="container">
				<motion.section layout className="landing">
					<motion.h1 layout>Hi, my name is Riona</motion.h1>
					<a layout  href="#middle" >See my projects</a>
				</motion.section>

				
					
        <Box num={1} />
      <Box num={2} />
      <Box num={3} />
				
			</section>
		</>
	);
}

export default App;