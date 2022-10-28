/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

// eslint-disable-next-line react/prop-types
export default function WorkCards({ data }) {
  const Item = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
  };
  // eslint-disable-next-line no-unused-vars
  const { id, name, description, tags, demo, github } = data;
  return (
    <motion.li className="card__list" variants={Item}>
      <h2>{name}</h2>
      <h2>{description}</h2>
      <div>
        {tags.map((t, id) => (
          <span key={id}>#{t}</span>
        ))}
      </div>
    </motion.li>
  );
}
