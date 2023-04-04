import styles from './Introduction.module.scss';
import profilePicture from '../../assets/intro/profile-picture.jpg';
import { useState } from 'react';
import LoadingIcon from '../UI/LoadingIcon';

const Introduction = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles['intro-container']}>
      <h1>Introduction</h1>
      Hi, I'm David Jenei, a developer from Hungary and you are now checking my
      visual CV. Have a nice day.
      <ul>
        <li>Szeged, Hungary</li>
        <li>jenei.david1994@gmail.com</li>
        <li>+36 30 683-8188</li>
        <li>
          <a
            href="https://www.linkedin.com/in/davidjenei/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DavidJenei94"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      {!loaded && (
        <div className={styles['profile-picture']}>
          <LoadingIcon />
        </div>
      )}
      <div style={{ display: loaded ? 'block' : 'none' }}>
        <img
          className={styles['profile-picture']}
          src={profilePicture}
          alt="Me with a happy face"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <p>
        I'm a hardworking and motivated person who is always ready to explore
        and learn new ways to overcome any challenge. I'm a good team player and
        I also work well independently. I organize and prioritize work to
        complete assignments in a timely, efficient manner.
      </p>
      <p>
        After gaining experience with my own projects I would like to utilize my
        knowledge to contribute with the best solutions to varied projects. I'm
        willing to put in the work to exceed others' expectations for me and to
        enhance any team along with the company.
      </p>
      <p>
        On this site you can find all CV related information about me, like my
        education, work experience,licenses and skills.You can also find more
        information about my projects and what technologies they are created
        with.
      </p>
    </div>
  );
};

export default Introduction;
