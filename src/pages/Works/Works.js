import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import SocialIcons from '../../components/elements/SocialIcons';
import WorkCards from '../../components/elements/WorkCards/WorkCards';
import './style.css';

export default function Works() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      //   return (yinyang.current.style.transform =
      //     'rotate(' + -window.pageYOffset + 'deg)')
    };

    window.addEventListener('scroll', rotate);
    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };

  const Work = [
    {
      id: 1,
      name: 'Agency Landing Page',
      description:
        'It is build on top of the React JS, with styledComponents and GSAP for smooth scrolling animations.',
      tags: ['react', 'gsap', 'styledComponents'],

      demo: 'https://agency-website-eta.vercel.app/',
      github: 'https://github.com/codebucks27/Agency-website',
    },
    {
      id: 2,
      name: 'Job listing website',
      description:
        'A Job listing website build in ReactJS. With searching and filtering functionalities.',
      tags: ['react', 'sass'],

      demo: 'http://react-job-listing-website.codebucks27.vercel.app/',
      github: 'https://github.com/codebucks27/react-job-listing-website',
    },
    {
      id: 3,
      name: 'Dev.to Clone',
      description:
        'A clone of Dev.to build using ReactJS. With realtime fetching of articles from dev.to using API.',
      tags: ['react', 'api', 'sass'],

      demo: 'http://devto-clone-codebucks27.vercel.app/',
      github: 'https://github.com/codebucks27/devto-clone',
    },
    {
      id: 4,
      name: 'Sidebar Menu',
      description:
        'A cool looking sidebar menu build using ReactJS and styledComponents.It has really smooth animations.',
      tags: ['react', 'styledComponents', 'react-router'],

      demo: 'https://react-sidebar.vercel.app/',
      github: 'https://github.com/codebucks27/react-sidebar',
    },
    {
      id: 5,
      name: 'Todo App(React + Redux)',
      description:
        'A todo app build using Redux-toolkit and framer-motion for smooth animations.',
      tags: ['react', 'redux', 'framer-motion'],

      demo: 'http://react-redux-todo-app-git-main-codebucks27.vercel.app/',
      github: 'https://github.com/codebucks27/React-Redux-Todo-App',
    },
    {
      description:
        'A reponsive navbar menu component in ReactJS with react-router functionalities. Built from scratch.',
      id: 6,
      name: 'Responsive Navigation Menu',
      tags: ['react', 'react-router', 'css'],

      demo: 'http://react-responsive-navbar-codebucks27.vercel.app/',
      github: 'https://github.com/codebucks27/React-responsive-navbar',
    },
  ];
  return (
    <div className="work__container">
      <button className="main__btn">button</button>
      <h1 className="logo">W</h1>
      <SocialIcons />

      <motion.ul
        animate="show"
        className="work__card"
        initial="hidden"
        ref={ref}
        variants={container}
      >
        {Work.map((d) => (
          <WorkCards data={d} key={d.id}/>
        ))}
      </motion.ul>
    </div>
  );
}
