import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from '../../hooks/useDimensions';
import { randomInRange } from '../../utils/math';

import styles from './Background.module.scss';

interface Star {
  index: string;
  top: number;
  left: number;
}

const Background = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      addStars(5);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
  }, []);

  const addStars = (starCount: number) => {
    const tempStars: Star[] = [];

    for (let index = 0; index < starCount; index++) {
      const top = randomInRange(0, windowHeight);
      const left = randomInRange(0, windowWidth);
      tempStars.push({
        index: `${index}${top}${left}${randomInRange(0, 99999)}`,
        top: top,
        left: left,
      });
    }

    setStars((prevState) => {
      return [...prevState, ...tempStars];
    });
  };

  return (
    <>
      {stars.map((star) => (
        <div
          className={styles.star}
          key={star.index}
          style={{ top: star.top, left: star.left }}
        ></div>
      ))}
    </>
  );
};

export default React.memo(Background);
