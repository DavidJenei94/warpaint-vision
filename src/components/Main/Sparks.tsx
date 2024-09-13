import { useEffect } from 'react';

import styles from './Sparks.module.scss';

/** Random number */
const randomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const Sparks = () => {
  useEffect(() => {
    const trails: HTMLDivElement[] = Array.from({ length: 100 }, () =>
      document.createElement('div')
    );
    const timeouts: any[] = Array.from({ length: 100 }, () => null);

    trails.forEach((trail) => {
      trail.className = styles['cursor-trail'];
      document.body.appendChild(trail);
    });

    let i = 0;
    const mouseMoveHandler = (event: MouseEvent) => {
      if (timeouts[i]) {
        clearTimeout(timeouts[i]);
      }

      trails[i].style.left = `${event.clientX + randomNumber(-5, 5)}px`;
      trails[i].style.top = `${event.clientY + randomNumber(-5, 5)}px`;
      trails[i].style.opacity = '0.5';
      trails[i].style.backgroundColor = 'rgb(255,255,255)';

      const currentI = i; // capture the current value of i
      timeouts[i] = setTimeout(() => {
        trails[currentI].style.opacity = '0'; // use the captured value
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
