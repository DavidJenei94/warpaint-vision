import SpinningImage from '../UI/SpinningImage';

import styles from './Skills.module.scss';
import tsLogo from '../../assets/skills/Typescript_logo.png';
import tsText from '../../assets/skills/Typescript_text.png';
import jsLogo from '../../assets/skills/Javascript_logo.png';
import jsText from '../../assets/skills/Javascript_text.png';
import htmlLogo from '../../assets/skills/HTML_logo.png';
import htmlText from '../../assets/skills/HTML_text.png';
import cssLogo from '../../assets/skills/CSS_logo.png';
import cssText from '../../assets/skills/CSS_text.png';
import scssLogo from '../../assets/skills/Scss_logo.png';
import scssText from '../../assets/skills/Scss_text.png';
import csLogo from '../../assets/skills/Cs_logo.png';
import csText from '../../assets/skills/Cs_text.png';
import sqlLogo from '../../assets/skills/SQL_logo.png';
import sqlText from '../../assets/skills/SQL_text.png';
import vbaLogo from '../../assets/skills/VBA_logo.png';
import vbaText from '../../assets/skills/VBA_text.png';

import reactLogo from '../../assets/skills/React_logo.png';
import reactText from '../../assets/skills/React_text.png';
import nodeLogo from '../../assets/skills/Node_logo.png';
import nodeText from '../../assets/skills/Node_text.png';
import postgresLogo from '../../assets/skills/Postgres_logo.png';
import postgresText from '../../assets/skills/Postgres_text.png';
import reduxLogo from '../../assets/skills/Redux_logo.png';
import reduxText from '../../assets/skills/Redux_text.png';
import dockerLogo from '../../assets/skills/Docker_logo.png';
import dockerText from '../../assets/skills/Docker_text.png';
import gitLogo from '../../assets/skills/Git_logo.png';
import gitText from '../../assets/skills/Git_text.png';
import leafletLogo from '../../assets/skills/Leaflet_logo.png';
import leafletText from '../../assets/skills/Leaflet_text.png';
import rpaLogo from '../../assets/skills/Rpa_logo.png';
import rpaText from '../../assets/skills/Rpa_text.png';

import hunLogo from '../../assets/skills/lan_hun_logo.png';
import hunText from '../../assets/skills/lan_hun_text.png';
import engLogo from '../../assets/skills/lan_eng_logo.png';
import engText from '../../assets/skills/lan_eng_text.png';
import nokLogo from '../../assets/skills/lan_nok_logo.png';
import nokText from '../../assets/skills/lan_nok_text.png';

const Skills = () => {
  return (
    <div className={styles['skills-container']}>
      <h1>Skills</h1>
      <h3>Technical skills</h3>
      <p>Languages:</p>
      <div className={styles['images-container']}>
        <SpinningImage logoImage={tsLogo} textImage={tsText} />
        <SpinningImage logoImage={jsLogo} textImage={jsText} />
        <SpinningImage logoImage={htmlLogo} textImage={htmlText} />
        <SpinningImage logoImage={cssLogo} textImage={cssText} />
        <SpinningImage logoImage={scssLogo} textImage={scssText} />
        <SpinningImage logoImage={csLogo} textImage={csText} />
        <SpinningImage logoImage={sqlLogo} textImage={sqlText} />
        <SpinningImage logoImage={vbaLogo} textImage={vbaText} />
      </div>

      <p>Technologies:</p>
      <div className={styles['images-container']}>
        <SpinningImage logoImage={reactLogo} textImage={reactText} />
        <SpinningImage logoImage={nodeLogo} textImage={nodeText} />
        <SpinningImage logoImage={postgresLogo} textImage={postgresText} />
        <SpinningImage logoImage={reduxLogo} textImage={reduxText} />
        <SpinningImage logoImage={dockerLogo} textImage={dockerText} />
        <SpinningImage logoImage={gitLogo} textImage={gitText} />
        <SpinningImage logoImage={leafletLogo} textImage={leafletText} />
        <SpinningImage logoImage={rpaLogo} textImage={rpaText} />
      </div>

      <h3>Languages</h3>
      <div className={styles['images-container']}>
        <SpinningImage logoImage={hunLogo} textImage={hunText} />
        <SpinningImage logoImage={engLogo} textImage={engText} />
        <SpinningImage logoImage={nokLogo} textImage={nokText} />
      </div>
    </div>
  );
};

export default Skills;
