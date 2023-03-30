import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Team.module.css'

// interface
interface TeamMember {
  name: string;
  azukiID: string | number;
  twitter: string;
}

// card hover effect
const useHoverEffect = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    let bounds: { x: number; y: number; width: number; height: number };

    const rotateToMouse = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      card.style.transform = `
                scale3d(1.08, 1.08, 1.03)
                rotate3d(
                    ${center.y / 100},
                    ${-center.x / 100},
                    0,
                    ${Math.log(distance) * 2}deg
                )
            `;

      const glow = card.querySelector('.teamCardGlow') as HTMLElement;
      if (glow) {
        glow.style.backgroundImage = `
                    radial-gradient(
                        circle at
                        ${center.x * 2 + bounds.width / 2}px
                        ${center.y * 2 + bounds.height / 2}px,
                        #ffffff55,
                        #0000000f
                    )
                `;
      }
    };

    const handleMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      card.style.transform = '';

      const glow = card.querySelector('.teamCardGlow') as HTMLElement;
      if (glow) {
        glow.style.backgroundImage = '';
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return cardRef;
};

const TeamCard: React.FC<{ teamMember: TeamMember }> = ({ teamMember }) => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useHoverEffect();

  return (
    <div
      ref={cardRef}
      className={styles.teamCard}
      style={{
        backgroundImage: `url('./team/${teamMember.azukiID}.png')`,
      }}
    >
      <a href={teamMember.twitter} target="_blank" rel="noopener noreferrer">
        <div className={styles.teamMemberInfo}>
          {/* <FontAwesomeIcon icon={faTwitter} style={{ width: '20px' }} /> @{teamMember.name} */}
          <FontAwesomeIcon icon={faTwitter} style={{ width: '20px' }} />
          <span className={styles.at}>
            @
          </span>
          <span className={styles.teamMemberName}>
            {teamMember.name}
          </span>
        </div>
        <div ref={glowRef} className={styles.teamCardGlow}></div>
      </a>
    </div>
  );
};

export default TeamCard;
