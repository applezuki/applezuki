import React from 'react';
import styles from '@/styles/ResponsiveVideo.module.css';

interface ResponsiveVideoProps {
  onButtonClick: () => void;
  isVideoHidden: boolean;
}

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({ onButtonClick, isVideoHidden }) => {
  return (
    <div className={`${styles.videoContainer} ${isVideoHidden ? styles.tvOff : ''}`}>
      <video autoPlay muted loop id="vidFlyer" className={styles.vid}>
        <source src="/vid/flyer_url.mp4" type="video/mp4" />
      </video>

      <button onClick={onButtonClick} className={styles.toggleButton}>X</button>
    </div>
  );
};

export default ResponsiveVideo;
