import React from 'react';
import SocialIcons from '../../components/elements/SocialIcons';
import './style.css';
import astronaut from '../../aseets/images/spaceman.png';
import BigTitle from '../../components/elements/BigTitle/BigTitle';

export default function About() {
  return (
    <div className="about__container">
      <SocialIcons />

      <div className="about__img">
        <img alt="spaceman" src={astronaut} />
      </div>
      <div className="about__main">
        I'm a front-end developer located in India. I love to create simple yet
        beautiful websites with great user experience.
        <br /> <br />
        I'm interested in the whole frontend stack Like trying new things and
        building great projects. I'm an independent freelancer and blogger. I
        love to write blogs and read books.
        <br /> <br />I believe everything is an Art when you put your
        consciousness in it. You can connect with me via social links.
      </div>

      <BigTitle text="about" />
    </div>
  );
}
