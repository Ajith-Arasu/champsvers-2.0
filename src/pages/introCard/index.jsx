import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import logo from '../../assets/images/cvlogo.png';
import Button from '../../components/Button/Button';
const IntroCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: username,
            password: password
          })
        }
      );
      const data = await res.json();
      console.log("Response:", data);
      if (!res.ok) {
        alert(data.message || "Login Failed");
        return;
      }
      navigate("/dashboard");
    } catch (error) {
      alert("Network error");
    }
  };
  return (
    <div className={styles.background}>
      <div className={styles.introcard}>
        <div className={styles.overlayBox}>
          <h1 className={styles.title}>
            Schools, <br/>
            <span className={styles.gamified}>Gamified.</span>
          </h1>
          <Link to="/dashboard">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>
      </div>
      <div className={styles.login}>
        <div className={styles.login_title}>
          <div className={styles.text}>Sign in</div>
          <div className={styles.desc}>To manage your school dashboard</div>
          <form className={styles.login_form} onSubmit={loginUser}>
            <input 
              type="text"
              placeholder="USERID"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" label="Continue" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
