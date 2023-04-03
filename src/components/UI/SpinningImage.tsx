import styles from './SpinningImage.module.scss';

interface SpinningImageProps {
  logoImage: string;
  textImage: string;
}

const SpinningImage = ({ logoImage, textImage }: SpinningImageProps) => {
  return (
    <div className={styles['image-container']}>
      <img className={styles['front-image']} src={logoImage} />
      <img className={styles['back-image']} src={textImage} />
    </div>
  );
};

export default SpinningImage;
