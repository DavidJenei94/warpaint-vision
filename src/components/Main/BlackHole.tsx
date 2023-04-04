import styles from './BlackHole.module.scss';

interface BlackHoleProps {
  setActiveBubble: React.Dispatch<React.SetStateAction<string>>;
}

const BlackHole = ({ setActiveBubble }: BlackHoleProps) => {
  const handleOnClick = () => {
    setActiveBubble('menu');
  };

  return (
    <div
      className={styles.blackhole}
      onClick={handleOnClick}
      title="Menu"
    ></div>
  );
};

export default BlackHole;
