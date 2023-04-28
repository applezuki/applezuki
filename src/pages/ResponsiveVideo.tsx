import React, { useRef, useState } from 'react';
import styles from '@/styles/ResponsiveVideo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

interface ResponsiveVideoProps {
  onButtonClick: () => void;
  isVideoHidden: boolean;
}

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({ onButtonClick, isVideoHidden }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleVolumeButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
    e.stopPropagation();
  };

  const handleCloseFlyerButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onButtonClick();
    e.stopPropagation();
  };

  return (
    <div>
      <button className={styles.toggleVolumeButton} onClick={handleVolumeButtonClick}>
        <FontAwesomeIcon
          icon={isMuted ? faVolumeMute : faVolumeUp}
          style={{ color: 'rgb(180, 250, 250)', width: '14px' }}
        />
      </button>
      <div
        className={`${styles.videoContainer} ${isVideoHidden ? styles.tvOff : ''}`}
        onClick={onButtonClick}
        >
        <video ref={videoRef} autoPlay muted loop id="vidFlyer" className={styles.vid}>
          <source src="/vid/oe_vibes/azukinycXmoar_animation_trimmed.mp4" type="video/mp4" />
        </video>

        <button className={styles.closeFlyerButton} onClick={handleCloseFlyerButtonClick}></button>
      </div>
    </div>
  );
};

export default ResponsiveVideo;
