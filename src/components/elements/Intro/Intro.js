import React from 'react';
import './style.css';
import { motion } from 'framer-motion';
import Me from '../../../aseets/images/profile-img.png';

export default function Intro() {
  return (
    <motion.div
      animate={{ height: '55vh' }}
      className="intro__box"
      initial={{ height: 0 }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <div className="sub__box">
        <div className="text__box">
          <h1>Hi,</h1>
          <h3>I'm Dwi Warsono.</h3>
          <h6>I design and Code simple yet beautiful websites.</h6>
        </div>
      </div>
      <div className="sub__box">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img alt="Profile Pic" className="intro__img" src={Me} />
        </motion.div>
      </div>
    </motion.div>
  );
}
