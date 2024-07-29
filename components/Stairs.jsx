import { motion } from "framer-motion";

const flipAnimation = {
  initial: {
    rotateY: 0,
  },
  animate: {
    rotateY: 180,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    rotateY: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Stairs = () => {
  return (
    <motion.div
      variants={flipAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full w-full bg-white relative"
      style={{
        transformOrigin: "right",
        perspective: 1000,
        borderRadius: "10px 0 0 0",
      }}
    >
      {/* Your page content goes here */}
      <div className="page-content">
        {/* ... */}
      </div>
    </motion.div>
  );
};

export default Stairs;
