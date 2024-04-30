import React, {useState} from 'react';
import Axios from 'axios';
import styles from './compcss/LoginForm.module.css';

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
            <form>
                <input className={styles.loginForm} type="text" placeholder="Username"/>
                <input className={styles.loginForm} type="password" placeholder="Password"/>
                <button className={styles.loginButton}>
                    <span></span>
                    Login
                    <span></span>
                </button>
            </form>
        </div>

    )
}

export default LoginForm;
