import React from 'react'

const Form = () => {
  return (
    <div className={styles.student_form}>
      <form>
        <label>NAME</label>
        <input type="text" placeholder="Enter Your Name" name="name" />
        <label>STUDENT ID</label>
        <input type="text" name="studentid" />
        <label>GRADE</label>
        <input type="text" name="grade" />
        <label >CLAN</label>
        <input type="text" placeholder="Enter Your Clan" name="clan" />
        <label >BIO</label>
        <textarea cols="30" rows="10" placeholder="Enter something about the student" />
        <button>Save</button>
      </form>
    </div>
  )
}

export default Form
