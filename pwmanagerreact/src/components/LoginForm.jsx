import React, {useState} from 'react';
import Axios from 'axios';
import styles from './compcss/LoginForm.module.css';
import CustomButton from "./CustomButton.jsx";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleButtonClick = () => {
        setButtonClicked(true);
    }
    return (
        <div className={styles.login}>
            <h1 className={styles.loginTitle}>Login</h1>
            <div className={styles.loginInner}>
                <form>
                    <input className={styles.loginForm} type="text" placeholder="Username"/>
                    <input className={styles.loginForm} type="password" placeholder="Password"/>
                   <CustomButton buttonText="Login" buttonClass="login" />
                </form>
            </div>
        </div>

    )
}

export default LoginForm;
