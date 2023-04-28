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
    <div>
      {/* <button></button> TODO add vol button */}
      <div
        className={`${styles.videoContainer} ${isVideoHidden ? styles.tvOff : ''}`}
        onClick={onButtonClick}
        >
        <video controls autoPlay muted loop id="vidFlyer" className={styles.vid}>
          <source src="/vid/oe_vibes/azukinycXmoar_animation_trimmed.mp4" type="video/mp4" />
        </video>

        <button className={styles.toggleButton} onClick={handleButtonClick}></button>
      </div>
    </div>
  );
};

export default ResponsiveVideo;
