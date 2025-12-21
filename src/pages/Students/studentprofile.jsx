import React from 'react'
import styles from './style.module.css';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/Header/PageHeader';

const StudentProfile = () => {
  return (
    <div className={styles.studentspage}>
      <PageHeader title="STUDENTS" dividerwidth="100%" />
      <div>
        <form className={styles.student_form}>
          <div className={styles.form_layout}>
            <label>NAME</label>
            <input type="text" placeholder="ADARSH RAJKUMAR" name="name" />
          </div>
          <div className={styles.form_layout}>
            <label>STUDENT ID</label>
            <input type="text" name="studentid" placeholder="1214144" />
          </div>
          <div className={styles.form_layout}>
            <label>GRADE</label>
            <div className={styles.grade_section}>
              <input type="text" className={styles.grade_input} name="grade" placeholder="8" />
              <label>SECTION</label>
              <input type="text" className={styles.section_input} name="section" placeholder="c" />
            </div>
          </div>
          <div className={styles.form_layout}>
            <label>CLAN</label>
            <input type="text" className={styles.clan_input} placeholder="SCA LEOPARDS" />
          </div>
          <div className={styles.form_layout}>
            <label>BIO</label>
            <textarea cols="30" rows="8" placeholder="ENTER SOMETHING ABOUT THE STUDENT(OPTIONAL)" />
          </div>
          <div className={styles.form_button}>
            <Button label="save"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentProfile;
