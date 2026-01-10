import axios from "axios";
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import AddButton from '../../components/Addbutton/AddButton';
import UserProfile from '../../components/Userprofile/UserProfile';
import PageHeader from '../../components/Header/PageHeader';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([null]);

  const navigate = useNavigate();

  const studentProfile = (id)=>{
    navigate(`/students/${id}/profile`);
}; 

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
};


  const fetchStudents = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("Access token not found");
        return;
}
      const api = axios.create({
        baseURL: "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
});
      const response = await api.get("/api/v1/page/members", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          page_id: "34b128f8-dfd8-40ca-b2fa-feca20306c3b",
          count: 20,
        },
      });
      console.log("API response:", response.data.data);
      setStudents(response.data.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
};

  useEffect(()=>{
    fetchStudents();
   },[]);
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
            {students.map((student) => {
              return (
                <li key={student.uid_ptype}  onClick={() => handleStudentClick(student)}>
                  {student.name || "Unnamed Student"}
                </li>
              );
            })}
          </ul>
        </div>
        <UserProfile student={selectedStudent}/>
      </div>
    </div>
  );
};

export default Students;

