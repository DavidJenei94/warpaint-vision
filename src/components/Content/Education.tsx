import styles from './Education.module.scss';

const Education = () => {
  return (
    <div className={styles['education-container']}>
      <div className={styles.education}>
        <h1>Education</h1>
        <h3>University of Szeged</h3>
        <p>Geoinformatics, MSc</p>
        <p>Sep 2024 - present</p>
        <h3>University of Szeged</h3>
        <p>Computer Science, BSc</p>
        <p>
          Thesis: Recognition of wearing masks based on speech using deep
          learning techniques.
        </p>
        <p>Sep 2018 - Jun 2021</p>
        <h3>University of Szeged</h3>
        <p>Accounting and Finance, BA</p>
        <p>
          Thesis: Building Societies' and National Homemaking Communities'
          formation, functioning and comparison.
        </p>
        <p>Sep 2013 - Jan 2017</p>
      </div>
      <div className={styles.certifications}>
        <h1>Certifications</h1>
        <h3>Swedish Masseur</h3>
        <p>Sep 2023</p>
        <h3>React - The Complete Guide</h3>
        <p>
          <a
            href="https://www.udemy.com/certificate/UC-46bc59c9-36b9-4a76-90cd-d589514d8a18/"
            target="_blank"
            rel="noreferrer"
          >
            Udemy
          </a>{' '}
          - Sep 2022
        </p>
        <h3>The Complete Web Development Bootcamp</h3>
        <p>
          <a
            href="https://www.udemy.com/certificate/UC-17826f03-638e-4db7-95e5-dde768c3b4e0/"
            target="_blank"
            rel="noreferrer"
          >
            Udemy
          </a>{' '}
          - Sep 2020
        </p>
        <h3>Driver's license - Category B</h3>
        <p>Jun 2013</p>
      </div>
    </div>
  );
};

export default Education;
