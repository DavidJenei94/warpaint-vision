import HobbiesPhotoGallery from './HobbiesPhotoGallery';

import styles from './Hobbies.module.scss';

const Hobbies = () => {
  return (
    <div className={styles['hobbies-container']}>
      <h1>Hobbies</h1>
      <ul>
        <li>Running</li>
        <li>Obstacle course running</li>
        <li>Wild camping</li>
        <li>Hiking</li>
        <li>Ocarina</li>
        <li>Harmonica</li>
        <li>Board games</li>
      </ul>
      <HobbiesPhotoGallery />
    </div>
  );
};

export default Hobbies;
