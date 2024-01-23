import { useEffect } from 'react';

import styles from './Sparks.module.scss';

/** Random number (currently between -5 and 5) */
const randomNumber = () => {
  return Math.floor(Math.random() * 11) - 5;
};

const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

const Sparks = () => {
  useEffect(() => {
    const trails: HTMLDivElement[] = Array.from({ length: 50 }, () =>
      document.createElement('div')
    );
    const timeouts: any[] = Array.from({ length: 50 }, () => null);

    trails.forEach((trail) => {
      trail.className = styles['cursor-trail'];
      document.body.appendChild(trail);
    });

    let i = 0;
    const mouseMoveHandler = (event: MouseEvent) => {
      if (timeouts[i]) {
        clearTimeout(timeouts[i]);
      }

      trails[i].style.left = `${event.clientX + randomNumber()}px`;
      trails[i].style.top = `${event.clientY + randomNumber()}px`;
      trails[i].style.opacity = '1';

      const currentI = i; // capture the current value of i
      timeouts[i] = setTimeout(() => {
        trails[currentI].style.opacity = '0'; // use the captured value
        trails[currentI].style.backgroundColor = randomColor();
      }, 500);

      i = (i + 1) % trails.length;
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      trails.forEach((trail) => document.body.removeChild(trail));
      timeouts.forEach((timeout) => timeout && clearTimeout(timeout));
    };
  }, []);

  return null;
};

export default Sparks;
