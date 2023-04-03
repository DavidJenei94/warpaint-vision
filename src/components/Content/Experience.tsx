import styles from './Experience.module.scss';

const Experience = () => {
  return (
    <div className={styles['exp-container']}>
      <h1>Experience</h1>
      <h3>APS VBA Support Analyst</h3>
      <p>Givaudan Business Solutions Kft., Budapest</p>
      <p>Feb 2021 - present</p>
      <ul>
        <li>Maintaining and creating VBA macros and VBS scripts</li>
        <li>Implementing new VBA module system for existing scripts</li>
        <li>Validating new automations</li>
        <li>Coordinate Excel and SAP related projects</li>
      </ul>
      <div className={styles.clear}></div>
      <h3>GL Accounting Assistant</h3>
      <p>Givaudan Hungary Kft., Makó</p>
      <p>Jul 2018 - Feb 2021</p>
      <ul>
        <li>Process improvement with VBA macros</li>
        <li>Creating reports for authorities and stakeholders</li>
        <li>Supervising accounting and fixed assets processes</li>
      </ul>
      <div className={styles.clear}></div>
      <h3>Finance and Accounting Administrator</h3>
      <p>Joint Municipal Office of Csanádpalota</p>
      <p>Mar 2017 - Jun 2018</p>
      <ul>
        <li>
          Implemented a new accounting and administration system (ASP) at 3
          local governments
        </li>
        <li>Successfully carried out a bankruptcy (insolvency) process</li>
      </ul>
    </div>
  );
};

export default Experience;
