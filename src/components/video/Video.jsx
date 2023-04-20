import React, { useEffect, useRef, useState } from 'react';
import './video.css';
import intro from '..//..//assets/intro.mp4';

const Video = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('ended', handleVideoEnded);
    video.play();

    const handleMouseDown = () => {
      video.pause();
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
    const video = videoRef.current;
    video.remove();
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleMouseOver = () => {
    const video = videoRef.current;
    video.pause();
  };

  const handleMouseOut = () => {
    const video = videoRef.current;
    video.play();
  };

  return (
    <div className="vid_1_wrapper">
      <video
        id="myVideo"
        ref={videoRef}
        autoPlay
        muted={isMuted}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <source src={intro} type="video/mp4" />
      </video>
      <div className="unmute-btn" onClick={handleMuteToggle}>
        {isMuted ? 'Unmute' : 'Mute'}
      </div>
      <div className="overlay-text">Click anywhere to STOP the video</div>
    </div>
  );
};

export default Video;
