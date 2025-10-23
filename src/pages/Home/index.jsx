import ShowCaseCard from '../../components/Homepage/ShowCaseCard';
import ShowCaseStatCard from '../../components/Homepage/ShowCaseStatCard';
import SummaryCard from '../../components/Homepage/SummaryCard';
import styles from './style.module.css';

const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.hometext}>HOME</div>
      <div className={styles.activity_panel}>
        <div className={styles.summary_section}>
          <SummaryCard value="33,000" text="WORKS" color="#FEE000" /> 
          <SummaryCard value="2,345" text="STUDENTS" color="#00FE55" />
          <SummaryCard value="46K" text="ENGAGEMENTS" color="#E62CFF" />
        </div>
        <div className={styles.showcase_section}>
          <ShowCaseCard value="1,230" text="PROJECTS"/>
          <ShowCaseCard value="3,530" text="ART WORKS"/>
          <ShowCaseCard value="3,530" text="MUSICALS"/>
          <ShowCaseCard value="3,530" text="BOOKS"/>
          <ShowCaseStatCard />
        </div>
      </div>
    </div>
  );
};

const Component = () => <div>Home Page</div>;

export default Component;
