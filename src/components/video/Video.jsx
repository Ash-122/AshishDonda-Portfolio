import React, { useEffect } from 'react';
import './video.css';
import intro from '..//..//assets/intro.mp4';

const Video = () => {
  useEffect(() => {
    const video = document.getElementById('myVideo');
    video.addEventListener('ended', handleVideoEnded);
    video.play();

    const handleMouseDown = () => {
      video.remove();
      document.removeEventListener('mousedown', handleMouseDown);
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      video.removeEventListener('ended', handleVideoEnded);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const handleVideoEnded = () => {
    const rootElement = document.getElementById('root');
    rootElement.classList.remove('hidden');
    const video = document.getElementById('myVideo');
    video.remove();
  };

  return (
    
    <div class="vid_1_wrapper">
        <video id="myVideo" style={{ width: '100vw', height: '100vh' }} autoPlay muted>
        <source src={intro} type="video/mp4"  />
        <div class="vid_1_text">Click to STOP</div>
      </video>
    </div>
  );
};

export default Video