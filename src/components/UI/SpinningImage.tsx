import { useState } from 'react';

import LoadingIcon from './LoadingIcon';

import styles from './SpinningImage.module.scss';

interface SpinningImageProps {
  logoImage: string;
  textImage: string;
}

const SpinningImage = ({ logoImage, textImage }: SpinningImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const onLoadHandler = () => {
    setLoaded(true);
  };

  return (
    <div className={styles['image-container']}>
      {!loaded && <LoadingIcon />}
      <div style={{ display: loaded ? 'contents' : 'none' }}>
        <img
          className={styles['front-image']}
          src={logoImage}
          onLoad={onLoadHandler}
        />
        <img className={styles['back-image']} src={textImage} />
      </div>
    </div>
  );
};

export default SpinningImage;
