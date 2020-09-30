import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg,setSelectedImg }) => {

    const handleClick = (e) => {
        // check if we click on the image with class name backdrop
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0}} 
            animate={{ opacity: 1 }} 
            className="backdrop" 
            onClick={handleClick}
        >
            <motion.img initial={{ y: '-100vh'}} 
                        animate={{ y: '0vh' }}
                        src={selectedImg} 
                        alt="enlarged pic" />
        </motion.div>
    )
}

export default Modal;
