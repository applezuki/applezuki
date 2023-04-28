import React from 'react';
import styles from '@/styles/ResponsiveVideo.module.css';

interface ResponsiveVideoProps {
  onButtonClick: () => void;
  isVideoHidden: boolean;
}

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({ onButtonClick, isVideoHidden }) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onButtonClick();
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.videoContainer} ${isVideoHidden ? styles.tvOff : ''}`}
      onClick={onButtonClick}
    >
      <video autoPlay muted loop id="vidFlyer" className={styles.vid}>
        <source src="/vid/event_concrete_garden/flyer_url.mp4" type="video/mp4" />
      </video>

      <button className={styles.toggleButton} onClick={handleButtonClick}></button>
    </div>
  );
};

export default ResponsiveVideo;
