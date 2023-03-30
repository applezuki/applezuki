import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Carousel.module.css'

import Images from "./slides.json";

const Slides: React.FC = () => {

  // controls
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };

  return (

    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel}>
      {
        Images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className={styles.carouselImg}
              src={img.src}
              alt={img.alt}
            />
            <Carousel.Caption>
              <h2 className={styles.caption}>
                <span className={styles.captionTitle}>
                  {img.captionTitle}
                </span>
                <span className={styles.carouselLinks}>
                  {img.manifold && (
                    <a href={img.manifold} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLink} width={18} />
                    </a>
                  )}
                  {img.twitterThread && (
                    <a href={img.twitterThread} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} width={18} />
                    </a>
                  )}
                </span>
              </h2>

            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
};

export default Slides;
