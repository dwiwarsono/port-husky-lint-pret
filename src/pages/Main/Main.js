import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Intro from '../../components/elements/Intro';
import SocialIcons from '../../components/elements/SocialIcons';
import './style.css';

export default function Main() {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleClick = () => {
    setClick(!click);
    setTheme(click ? 'dark' : 'light');
  };

  return (
    <div className="main__container">
      <div className={`main__dark ${click && 'active'}`} />
      <div className="container">
        <button className="main__btn" onClick={handleClick}>
          button
        </button>
        <h1 className="logo">W</h1>
        <SocialIcons theme={theme} />

        <NavLink
          className="contact"
          target="_blank"
          to={{ pathname: 'mailto:dwi2warsono@gmail.com' }}
        >
          <motion.h2
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </NavLink>
        <NavLink className="blog" to="/blog">
          <motion.h2
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </NavLink>
        <NavLink className="work" to="/work">
          <motion.h2
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </NavLink>
        <div className="wrapper__bottom">
          <NavLink className="about" to="/about">
            <motion.h2
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </NavLink>
          <NavLink className="skills" to="skills">
            <motion.h2
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </motion.h2>
          </NavLink>
        </div>
      </div>
      {click && <Intro />}
    </div>
  );
}
