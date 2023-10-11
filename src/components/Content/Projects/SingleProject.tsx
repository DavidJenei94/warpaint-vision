import { useState } from 'react';
import LoadingIcon from '../../UI/LoadingIcon';

import styles from './SingleProject.module.scss';

interface SingleProjectsProps {
  imgSrc: string;
  project: string;
  link: string;
  children: React.ReactNode;
}

const SingleProject = ({
  imgSrc,
  project,
  link,
  children,
}: SingleProjectsProps) => {
  const [loaded, setLoaded] = useState(false);
  const [imageClicked, setImageClicked] = useState<boolean>(false);
  const projectNameElement: JSX.Element = link ? (
    <a href={link} target="_blank" rel="noreferrer">
      <h3>{project}</h3>
    </a>
  ) : (
    <h3>{project}</h3>
  );

  const handleNormalImageClick = () => {
    setImageClicked(true);
  };

  const handleZoomedImageClick = () => {
    setImageClicked(false);
  };

  return (
    <>
      {imageClicked && (
        <div className={styles['image-modal']} onClick={handleZoomedImageClick}>
          <img className={styles['zoomed-image']} src={imgSrc} alt={project} />
        </div>
      )}
      <div className={styles.container}>
        {!loaded && <LoadingIcon />}
        <img
          className={styles['normal-image']}
          src={imgSrc}
          alt={project}
          onClick={handleNormalImageClick}
          onLoad={() => setLoaded(true)}
        />
        {projectNameElement}
        {children}
      </div>
    </>
  );
};

export default SingleProject;
