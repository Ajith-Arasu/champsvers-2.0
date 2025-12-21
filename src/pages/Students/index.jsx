import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import AddButton from '../../components/Addbutton/AddButton';
import UserProfile from '../../components/Userprofile/UserProfile';
import PageHeader from '../../components/Header/PageHeader';

const Students = () => {

  const navigate = useNavigate();
  const studentProfile = (id)=>{
    navigate(`/students/${id}/profile`);
}; 
  return( 
    <div className={styles.studentspage}>
      <PageHeader title="STUDENTS" dividerwidth="100%">
        <AddButton text="ADD NEW STUDENT" onClick={()=>studentProfile(123)}/>
      </PageHeader>
      <div className={styles.userdetails}>
        <span className={styles.searchtext}>Search</span>
        <div className={styles.searchcontainer}>
          <div className={styles.searchbar}></div>
          <ul className={styles.studentnames}>
            <li>Mary Anne</li>
            <li>John Paul</li>
            <li>Lily-Rose</li>
            <li>Billy Joe</li>
            <li>Rahul Kumar</li>
            <li>Anjali Singh</li>
            <li>Billy Joe</li>
            <li>Jean-Luc</li>
            <li>Priyanka Chopra</li>
            <li>Ana María</li>
            <li>Sita Devi</li>
            <li>George William Scott</li>
            <li>Emma Charlotte Watson</li>
            <li>Amitabh Harivansh Rai</li>
            <li>John Fitzgerald Kennedy</li>
            <li>Mary Jo Kathleen</li>
            <li>Luis Carlos Alvaro</li>
            <li>Anna Maria Sophia</li>
            <li>Rajkumari Durgeshwari</li>
          </ul>
        </div>
        <UserProfile/>
      </div>
    </div>
  );
};

export default Students;

