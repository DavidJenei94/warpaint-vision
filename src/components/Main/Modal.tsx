import Education from '../Content/Education';
import Experience from '../Content/Experience';
import Hobbies from '../Content/Hobbies/Hobbies';
import Introduction from '../Content/Introduction';
import Projects from '../Content/Projects/Projects';
import Skills from '../Content/Skills';
import Button from '../UI/Button';
import Menu from './Menu';

import styles from './Modal.module.scss';
import logo from '../../assets/menu/logo.png';

interface ModalProps {
  activeBubble: string;
  setActiveBubble: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({ activeBubble, setActiveBubble }: ModalProps) => {
  const handleClose = () => {
    setActiveBubble('');
  };

  const handleMenu = () => {
    setActiveBubble('menu');
  };

  let activeContent: any = null;
  switch (activeBubble) {
    case 'hobbies':
      activeContent = <Hobbies />;
      break;
    case 'edu':
      activeContent = <Education />;
      break;
    case 'exp':
      activeContent = <Experience />;
      break;
    case 'projects':
      activeContent = <Projects />;
      break;
    case 'skills':
      activeContent = <Skills />;
      break;
    case 'intro':
      activeContent = <Introduction />;
      break;
    case 'menu':
      activeContent = <Menu setActiveBubble={setActiveBubble} />;
      break;
    default:
      // An empty modal is opened if the content is unimplemented
      // Starting with "-" means it is unimplemented
      break;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.menubar}>
        {activeBubble !== 'menu' && <Button onClick={handleMenu}>Menu</Button>}
        <Button className={styles.close} onClick={handleClose}>
          X
        </Button>
      </div>
      <img className={styles.logo} src={logo} alt="warpaint vision logo" />
      {activeContent && activeContent}
    </div>
  );
};

export default Modal;
