/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Facebook, Github, Twitter, YouTube } from '../../../aseets/IconsSvg';
import './style.css';

export default function SocialIcons({ theme }) {
  function Motion({ delay, children, pathname }) {
    return (
      <motion.div
        // initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1]}}
        transition={{ type: 'spring', duration: 1, delay }}
      >
        <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname }}>
          {children}
        </NavLink>
      </motion.div>
    );
  }

  const fill = theme === 'dark' ? '#000000' : '#FCF6F4';

  return (
    <div className="icons">
      <Motion delay={1} pathname="https://github.com/codebucks27">
        <Github fill={fill} height={25} width={25} />
      </Motion>
      <Motion delay={1.2} pathname="https://twitter.com/code_bucks">
        <Twitter fill={fill} height={25} width={25} />
      </Motion>
      <Motion delay={1.4} pathname="https://facebook.com/codebucks27">
        <Facebook fill={fill} height={25} width={25} />
      </Motion>
      <Motion delay={1.6} pathname="https://youtube.com">
        <YouTube fill={fill} height={25} width={25} />
      </Motion>

      <span
        className={`line ${theme === 'dark' ? 'line__dark' : 'line__light'}`}
      />
    </div>
  );
}
