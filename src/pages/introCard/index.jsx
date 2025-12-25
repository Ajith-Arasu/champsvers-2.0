import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import logo from '../../assets/images/cvlogo.png';
import Button from '../../components/Button/Button';
import ApiCall from '../Api/api';
const IntroCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = ApiCall();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.includes(" ") || password.includes(" ")) {
    alert("Username and password should not contain any spaces");
    return;
  }
    const credentials={
      email:username.trim(),
      password:password.trim(),
    };
    if(!credentials.email || !credentials.password){
      alert('please enter both username and password');
      return;
    }
    login(credentials)
      .then((res)=>{
        console.log('Response', res);
        navigate("/dashboard");
      })
      .catch ((error)=>{
        if(error.response){
          console.error('Response Error:',error.response.data);
          alert("Invalid username and password");
  }
        if(error.request){
          console.error('No response:', error.request);
        }else{
          console.error('Error', error.message);
        }
      });
  };
  return (
    <div className={styles.background}>
      <div className={styles.bgBlur}></div>
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
        <div className={styles.login_details}>
          <div className={styles.login_title}>
            <div className={styles.text}>Sign in</div>
            <div className={styles.desc}>To manage your school dashboard</div>
            <form className={styles.login_form} onSubmit={handleLogin}>
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
    </div>
  );
};

export default IntroCard;
