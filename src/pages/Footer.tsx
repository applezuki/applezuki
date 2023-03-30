import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <FontAwesomeIcon icon={faTwitter} style={{ width: '20px' }} /> &nbsp;
      <a href="https://twitter.com/AzukiNYC" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <FontAwesomeIcon icon={faDiscord} style={{ width: '20px' }} /> &nbsp;
      <a href="https://discord.com/invite/Yv6TqXs6Xp" target="_blank" rel="noopener noreferrer">
        Discord
      </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      Made with ❤️ 2023
    </footer>
  );
};

export default Footer;
