import React, {useState} from 'react';
import styles from './compcss/LoginForm.module.css';
import CustomButton from "./CustomButton.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LoginForm = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [firstName, setFirstName] = useState('');

    const handleButtonClick = () => {
        handleLogin();
        setButtonClicked(true);
    }

   const handleLogin = async (event) => {
        try{
            const response = await axios.post('http://localhost:8081/login', {
                username, password
            });
            console.log(response);
            if(response.data.success){
                const role = response.data.role.values().value.name;
                setFirstName(response.data.firstName);
                alert(`Login successful! Welcome ${response.data.firstName}!`);
                localStorage.setItem('token', response.data.token);
                navigate('/home');

        }else{
                alert('Login failed');
            }
        }catch (error){
            console.error(error);
            console.error(error.message);
            console.error(error.config);
            if (error.response){
                console.error(error.response);
            }
        }
   };



    return (
        <div className={styles.login}>
            <h1 className={styles.loginTitle}>Login</h1>
            <div className={styles.loginInner}>
                <form>
                    <input className={styles.loginForm} type="text" placeholder="Username"/>
                    <input className={styles.loginForm} type="password" placeholder="Password"/>
                   <CustomButton buttonText="Login" buttonClass="login" onClick={handleButtonClick}/>
                </form>
            </div>
        </div>

    )
}

export default LoginForm;
