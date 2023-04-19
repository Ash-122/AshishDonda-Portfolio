import React, { useState } from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocials';
import ME from '../../assets/me.png';
import Video from '../video/Video';

const Header = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handleImageClick = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
  };
  
  return (
    <header>
      <div className="container header__container">
        <h5>Hello recruiters, I'm</h5>
        <h1>Ashish Donda</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me" onClick={handleImageClick}>
          <img src={ME} alt="me" />
          Click on me
        </div>
        <div className="list" onClick={handleImageClick}> 
          <h2>Why Hire me?</h2>
          <h4>Quick Leaner</h4>
          <h4>Persistent</h4>
          <h4>Team Player</h4>
          <h4>Hardworking</h4>
          <h4>Always eager to learn new things</h4>
        </div>

        <a href="#contact" className="scroll__down">
          Ping me
        </a>
        {playVideo && <Video />}
      </div>
    </header>
  );
};

export default Header;
