import SingleProjects from './SingleProjects';

import styles from './Projects.module.scss';
import warpaintvisionImg from '../../../assets/projects/warpaintvision.png';
import warpaintadventureImg from '../../../assets/projects/warpaintadventure.png';
import garminImg from '../../../assets/projects/garmin.png';
import warpaintsoundImg from '../../../assets/projects/warpaintsound.png';
import raceTrackerImg from '../../../assets/projects/racetracker.png';

const Projects = () => {
  return (
    <div className={styles['projects-container']}>
      <h1>Projects</h1>
      <p>
        (You can check the codes on my{' '}
        <a
          href="https://github.com/DavidJenei94"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{' '}
        account)
      </p>

      <div className={styles['projects-list']}>
        <SingleProjects
          project="Warpaint Vision"
          imgSrc={warpaintvisionImg}
          link="https://warpaintvision.com"
        >
          <p>
            My visual CV and personal page - It is an extended and more
            spectacular edition of a traditional CV.
          </p>
          <p>Tech stack: React with TS, SCSS, AWS</p>
        </SingleProjects>
        <SingleProjects
          project="Warpaint Sound"
          imgSrc={warpaintsoundImg}
          link="https://warpaintsound.com"
        >
          <p>
            This application's purpose is to provide some information about
            musical instruments and to make joy. You can record sound recordings
            of updloaded musical instruments on a map and you can also upload
            your owns.
          </p>
          <p>
            Tech stack: React with TS, Node.js, SCSS, Postgres, Sequelize,
            Docker, Redux, Context, Leaflet, AWS
          </p>
        </SingleProjects>
        <SingleProjects
          project="Warpaint Adventure"
          imgSrc={warpaintadventureImg}
          link="https://github.com/DavidJenei94/warpaint-adventure"
        >
          <p>
            It is an under construction hiking application. Main features: user
            management, packing list and item management, route planner. Future
            features: adventure visualization.
          </p>
          <p>
            Tech stack: React with TS, Node.js, SCSS, Postgres, Sequelize,
            Docker, Redux, Leaflet, ORS API
          </p>
        </SingleProjects>
        <SingleProjects
          project="Race results recording application"
          imgSrc={raceTrackerImg}
          link=""
        >
          <p>
            Simple race and racer management (hobby propject to track the race
            results in my family)
          </p>
          <p>Tech stack: React, Node.js, MySQL, 3rd party APIs</p>
        </SingleProjects>

        <SingleProjects
          project="Garmin Connect IQ apps"
          imgSrc={garminImg}
          link="https://apps.garmin.com/en-US/developer/2771e077-a0d7-4cd4-8e3e-b6057c853dc9/apps"
        >
          <p>
            Description: Garmin watchfaces and applications. 2 unique watchfaces
            to show the time and some selected fitness data, 1 motivational data
            field and 1 language learning app.
          </p>
          <p>Tech stack: Monkey C</p>
        </SingleProjects>
      </div>
    </div>
  );
};

export default Projects;
