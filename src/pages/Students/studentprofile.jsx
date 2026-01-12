import React from 'react'
import { useState } from 'react';
import styles from './style.module.css';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/Header/PageHeader';
import axios from 'axios';

const StudentProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentid: '',
    grade: '',
    section: '',
    clan: '',
    bio: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3️⃣ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://your-api-url.com/student/create',
        formData
      );

      console.log('Student saved:', response.data);
      alert('Student profile saved successfully!');
    } catch (error) {
      console.error('Error saving student:', error);
      alert('Failed to save student profile');
    }
  };

  return (
    <div className={styles.studentspage}>
      <PageHeader title="STUDENTS" dividerwidth="100%" />
      <div>
        <form className={styles.student_form} onSubmit={handleSubmit}>
          <div className={styles.form_layout}>
            <label>NAME</label>
            <input type="text" placeholder="ADARSH RAJKUMAR" name="name" value={formData.name}
              onChange={handleChange} />
          </div>
          <div className={styles.form_layout}>
            <label>STUDENT ID</label>
            <input type="text" name="studentid" placeholder="1214144" value={formData.studentid}
              onChange={handleChange} />
          </div>
          <div className={styles.form_layout}>
            <label>GRADE</label>
            <div className={styles.grade_section}>
              <input type="text" className={styles.grade_input} name="grade" placeholder="8" value={formData.grade}
                onChange={handleChange} />
              <label>SECTION</label>
              <input type="text" className={styles.section_input} name="section" placeholder="c" value={formData.section}
                onChange={handleChange} />
            </div>
          </div>
          <div className={styles.form_layout}>
            <label>CLAN</label>
            <input type="text" className={styles.clan_input} placeholder="SCA LEOPARDS" value={formData.clan}
              onChange={handleChange} />
          </div>
          <div className={styles.form_layout}>
            <label>BIO</label>
            <textarea cols="30" rows="8" placeholder="ENTER SOMETHING ABOUT THE STUDENT(OPTIONAL)" value={formData.bio}
              onChange={handleChange} />
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
