import { motion } from "framer-motion";

const Animation = () => {
	return (
		<motion.div
			initial={false}
			animate={{ x: 100 }}
			drag="x"
			dragConstraints={{ left: -100, right: 100 }}
		>
			hola
		</motion.div>
	);
};

export default Animation;
