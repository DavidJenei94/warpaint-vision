import { useEffect, useRef, useState } from 'react';
import { bubble } from '../../models/bubble.model';
import styles from './Bubble.module.scss';

interface BubbleProps {
  children: React.ReactNode;
  bubble: bubble;
  setBubble: React.Dispatch<React.SetStateAction<bubble>>;
  setActiveBubble: React.Dispatch<React.SetStateAction<string>>;
  overlapChecker: boolean;
  initialized: boolean;
}

const Bubble = ({
  children,
  setBubble,
  setActiveBubble,
  overlapChecker,
  bubble,
  initialized,
}: BubbleProps) => {
  const divRef = useRef<HTMLInputElement>(null);

  const [hovered, setHovered] = useState<boolean>(false);
  const [pulsating, setPulsating] = useState<boolean>(false);

  useEffect(() => {
    // update coordinates
    const curentBubble = divRef.current;

    if (curentBubble) {
      const rect = curentBubble.getBoundingClientRect();
      setBubble((prevState) => {
        return {
          ...prevState,
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom,
        };
      });
    }

    // updates pulsating if overlap or edge collide
    if (bubble.collision && !pulsating) {
      setPulsating(true);

      setTimeout(() => {
        setPulsating(false);
        setBubble((prevState) => {
          return { ...prevState, collision: false };
        });
      }, 3000);
    }
  }, [overlapChecker, bubble.collision, pulsating, setBubble]);

  const collisionStyle = `collision-${bubble.pulseColor}`;

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setActiveBubble(bubble.name);
  };

  const bubbleClass = pulsating
    ? `${styles.bubble} ${hovered ? styles.hover : styles[collisionStyle]} ${
        initialized && styles.appear
      }`
    : `${styles.bubble} ${hovered && styles.hover} ${
        initialized && styles.appear
      }`;

  return (
    <div
      ref={divRef}
      className={bubbleClass}
      style={{
        // display: !initialized ? 'hidden' : 'flex',
        // opacity: !initialized ? 0 : 1,
        transition: `transform ${
          !initialized ? '2' : bubble.transformDuration
        }s linear, opacity 2s ease-in-out`,
        transform: `translateX(${bubble.xDirection}) translateY(${bubble.yDirection})`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Bubble;
