import React, {useEffect, useState} from "react";
import styles from './compcss/registerForm.module.css';
import CustomButton from './CustomButton.jsx'

const RegisterForm = () => {

    const [password, setPassword] = useState("")

    const generatePassword = () => {
        const length = 12;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-";
        let retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i){
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(retVal);
    }

    return (
        <div className={styles.register}>
            <h1 className={styles.registerTitle}>Registrieren</h1>
            <div className={styles.registerInner}>
                <form className={styles.registerFormContainer}>
                    <input className={styles.registerForm} type="text" placeholder="Username"/>
                    <input className={styles.registerForm} type="text" placeholder="Vorname"/>
                    <input className={styles.registerForm} type="text" placeholder="Nachname"/>
                    <input className={styles.registerForm} type="text" placeholder="Email"/>
                    <input className={styles.registerForm} type="password" placeholder="Passwort"/>
                    <input className={styles.registerForm} type="password" placeholder="Passwort wiederholen"/>

                    <CustomButton buttonText="Registrieren" buttonClass="registerButton" />
                    <CustomButton buttonText="Passwort generieren" buttonClass="randoBut#ton" onClick={generatePassword}/>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;