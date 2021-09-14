import { motion } from "framer-motion";

const Variants = () => {
	const list = { hidden: { opacity: 0 } };
	const item = { hidden: { x: -10, opacity: 0 } };

	return (
		<motion.ul animate="hidden" variants={list}>
			<motion.li variants={item} />
			<motion.li variants={item} />
			<motion.li variants={item} />
		</motion.ul>
	);
};

export default Variants;
