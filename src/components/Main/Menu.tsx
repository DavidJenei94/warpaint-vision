import Button from '../UI/Button';

import styles from './Menu.module.scss';

interface MenuProps {
  setActiveBubble: React.Dispatch<React.SetStateAction<string>>;
}

const Menu = ({ setActiveBubble }: MenuProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = (event.target as HTMLButtonElement).name;
    setActiveBubble(name);
  };

  return (
    <div className={styles.menu}>
      <Button name="intro" onClick={handleClick}>
        Introduction
      </Button>
      <Button name="projects" onClick={handleClick}>
        Projects
      </Button>
      <Button name="skills" onClick={handleClick}>
        Skills
      </Button>
      <Button name="exp" onClick={handleClick}>
        Experience
      </Button>
      <Button name="edu" onClick={handleClick}>
        Education
      </Button>
      <Button name="hobbies" onClick={handleClick}>
        Hobbies
      </Button>
    </div>
  );
};

export default Menu;
