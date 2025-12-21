import styles from './style.module.css';
import ShowCaseCard from '../../components/Homepage/ShowCaseCard';
import ShowCaseStatCard from '../../components/Homepage/ShowCaseStatCard';
import SummaryCard from '../../components/Homepage/SummaryCard';
import PageHeader from '../../components/Header/PageHeader';

const Home = () => {
  const summaryList=[
    {value: "33,000", text: "WORKS", color: "#FEE000"},
    {value: "2,345", text: "STUDENTS", color: "#00FE55"},
    {value: "46K", text: "ENGAGEMENTS", color: "#E62CFF"}
  ];
  const showcaseList=[
    {value:"1,230", text:"PROJECTS"},
    {value:"3,530", text:"ART WORKS"},
    {value:"3,530", text:"MUSICALS"},
    {value:"3,530", text:"BOOKS"}
  ];
  return (
    <div className={styles.homepage}>
      <PageHeader title="Home" dividerWidth="97%" />
      <div className={styles.activity_panel}>
        <div className={styles.summary_section}>
          {summaryList.map((summary,index)=>
            <SummaryCard key={index} value={summary.value} text={summary.text} color={summary.color} />
          )}
        </div>
        <div className={styles.showcase_section}>
          {showcaseList.map((showcase,index)=>
            <ShowCaseCard key={index} value={showcase.value} text={showcase.text} />
          )}
          <ShowCaseStatCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
