import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import userimg from '../../assets/images/Boy.png';
import sorticon from '../../assets/images/Sort.png';
import rtchevicon from '../../assets/images/rgtchevron.png';
import StudentCreations from '../../components/Studentcreations/StudentCreations';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import AddButton from '../../components/Addbutton/AddButton';
import PageHeader from '../../components/Header/PageHeader';

const StudentDetails = () => {
  const navigate = useNavigate();
  
  const clanPage = (id)=>{
    navigate(`/clans`);
};  
  const talentList=[
    {value: "315", label: "QUESTS"},
    {value: "730", label: "ARTS"},
    {value: "34", label: "BOOKS" },
    {value: "20", label: "MUSIC"},
    {value: "23", label: "ACHIEVEMENTS"},
    {value: "16", label: "SPORTS"},
    {value: "16", label: "AWARDS"},
    {value: "16", label: "QUIZES"},
    {value: "26", label: "COLLECTIONS"},
    {value: "18", label: "TROPHIES"}
  ];
  return( 
    <div className={styles.studentspage}>
      <PageHeader title="STUDENTS" dividerwidth="100%">
        <div className={styles.titlebtn_grp}>
        <AddButton icon={sorticon} text="MOVE TO CLAN" onClick={clanPage}/>
        <AddButton icon={rtchevicon} text="EXIT SCHOOL" />
      </div>
      </PageHeader>
      <div className={styles.studentdetails}>
        <div className={styles.score_card}>
          <div className={styles.user_activity}>
            <div className={styles.user_info}>
              <img className={styles.user_image} src={userimg} alt="userimage"></img>
              <div className={styles.student_info}>
                <p>Billy joe</p>
                <p>10 YEARS OLD, grade 5</p>
                <p>SCA PANTHERS</p>
              </div>
            </div>
            <div className={styles.activity_panel}>
              <p>Activity   : 3445</p>
              <p>Popularity  : 3445</p>
              <p>Activity   : 3445</p>
              <p>Activity   : 3445</p>
            </div>
          </div>
          <div className={styles.reward_badge}>
            <div className={styles.coins}>
              <div className={styles.coin_circle}></div>
              <div className={styles.coins_collection}>
                <div className={styles.coin_tiles}>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                </div>
                <span className={styles.coins_label}>COINS EARNED</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.talent_showcase}>
          {talentList.map((talent,index)=>(
            <InfoBlock key={index} value={talent.value} label={talent.label} />
          ))}
        </div>
        <StudentCreations/>
      </div>
    </div>
  );
};

export default StudentDetails;
