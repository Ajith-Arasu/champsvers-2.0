import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import logo from '../../assets/images/cvlogo.png';
import Button from '../../components/Button/Button';
import { login } from '../Api/api'

const IntroCard = () => {
  const initialState={
    username: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
   
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!formData.username && !formData.password){
      setError('Username and Password is required');
      return;
    }else if(!formData.username){
      setError('username is required');
      return;
    }else if(!formData.password){
      setError('password is required');
      return;
    }
    setError('');
 
    const credentials={
      email:formData.username.trim(),
      password:formData.password.trim(),
    };
  
    if (credentials.email.includes(" ") || credentials.password.includes(" ")) {
      alert("Username and password should not contain any spaces");
      setFormData(initialState);
      return;
}

    try {
      const res = await login(credentials);
      console.log('Login Success:', res);
      navigate("/dashboard");
    }catch (err){
      if(err.response){
        console.error('Response Error:',err.response.data);
        alert("Invalid username and password");
      }else{
        console.error('Error', err.message);
      }
    }finally{
      setFormData(initialState);
    }
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
                name="username"
                value={formData.username}
                onChange={handleChange} />
               
              <input
                type="password"
                placeholder="PASSWORD"
                name="password"
                value={formData.password}
                onChange={handleChange} />
              {error && <p className={styles.error_text}>{error}</p>} 
              <Button type="submit" label="Continue" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
