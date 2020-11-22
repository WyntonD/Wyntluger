import React from 'react';
import { motion } from 'framer-motion';


function Motion() {
    return (
        <div>
            <motion.div
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            />
        </div>
    )
}

export default Motion;