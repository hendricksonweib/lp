import React, { useRef, useEffect } from 'react';

const Video = ({ src, type }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleEnded = () => {
        videoElement.currentTime = 0;
        videoElement.play();
      };

      videoElement.addEventListener('ended', handleEnded);

      // Autoplay the video when the component mounts
      videoElement.play().catch(error => {
        console.error("Failed to play the video:", error);
      });

      return () => {
        videoElement.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <video id='videoPlayer' ref={videoRef} autoPlay muted>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
