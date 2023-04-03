import { useState } from 'react';

import Button from '../../UI/Button';
import LoadingIcon from '../../UI/LoadingIcon';

import styles from './HobbiesPhotoGallery.module.scss';
import image1 from '../../../assets/hobbies/9.jpg';
import image2 from '../../../assets/hobbies/5.jpg';
import image3 from '../../../assets/hobbies/8.jpg';
import image4 from '../../../assets/hobbies/4.jpg';
import image5 from '../../../assets/hobbies/7.jpg';
import image6 from '../../../assets/hobbies/6.jpg';
import image7 from '../../../assets/hobbies/2.png';
import image8 from '../../../assets/hobbies/2.jpg';

const images = [
  { id: 1, src: image1, alt: 'Running' },
  { id: 2, src: image2, alt: 'Wild Camping' },
  { id: 3, src: image3, alt: 'Hiking' },
  { id: 4, src: image4, alt: 'Hiking 2' },
  { id: 5, src: image5, alt: 'Hiking 3' },
  { id: 6, src: image6, alt: 'Wild Camping 2' },
  { id: 7, src: image7, alt: 'Board game' },
  { id: 8, src: image8, alt: 'OCR / Crossfit' },
];

const HobbiesPhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string>('');

  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
    setDirection('prev');
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
    setDirection('next');
  };

  return (
    <>
      {!imagesLoaded && <LoadingIcon />}
      <div
        className={styles['slide-container']}
        style={{ display: imagesLoaded ? 'block' : 'none' }}
      >
        {images.map((image, index) => {
          const prevIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
          const nextIndex =
            currentIndex === images.length - 1 ? 0 : currentIndex + 1;

          let className = styles.slide;
          if (direction === '') {
            // when opening modal
            className = `${styles.slide} ${
              index === currentIndex && styles.default
            }`;
          } else if (direction === 'next') {
            className = `${styles.slide} ${
              index === currentIndex
                ? styles['to-next']
                : index === prevIndex
                ? styles['to-next-prev']
                : ''
            }`;
          } else if (direction === 'prev') {
            className = `${styles.slide} ${
              index === currentIndex
                ? styles['to-prev']
                : index === nextIndex
                ? styles['to-prev-next']
                : ''
            }`;
          }

          return (
            <img
              key={index}
              className={className}
              src={image.src}
              alt={image.alt}
              onLoad={handleImageLoad}
            />
          );
        })}
      </div>
      <Button onClick={handlePrevClick}>Prev</Button>
      <Button onClick={handleNextClick}>Next</Button>
    </>
  );
};

export default HobbiesPhotoGallery;
