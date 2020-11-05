import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

 function Drag() {
  const constraintsRef = useRef(null);

  return (
      <div style={{color:'#fff'}}>
    <motion.div className="container" ref={constraintsRef}>
      <motion.div className="item" drag dragConstraints={constraintsRef} />
    </motion.div>
    </div>
  );
};

export default Drag;