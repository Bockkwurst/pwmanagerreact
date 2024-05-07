import React, {useEffect, useState} from "react";
import styles from './compcss/registerForm.module.css';
import CustomButton from './CustomButton.jsx'
import debounce from "../utils/Debounce.js";
import axios from "axios";

const RegisterForm = () => {

    const [password, setPassword] = useState("")
    const [passwordMessage, setPasswortMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState({message: "", color: ""})
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [isUsernameTaken, setIsUsernameTaken] = useState(false);
    const [isEmailTaken, setIsEmailTaken] = useState(false);
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(false);
    const [emailInputMade, setEmailInputMade] = useState(false);
    const [usernameInputMade, setUsernameInputMade] = useState(false);
    const [passwordInputMade, setPasswordInputMade] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const setUsernameInputMadeDebounced = debounce(setUsernameInputMade, 1000);
    const setPasswordInputMadeDebounced = debounce(setPasswordInputMade, 1000);
    const setEmailInputMadeDebounced = debounce(setEmailInputMade, 1000);
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('black');


    const generatePassword = () => {
        const length = 12;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-";
        let retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(retVal);
    };

    const handleRegister = () => {
        if () {

            setSuccessMessage({message: "Registrierung erfolgreich!", color: "green"})
        } else {
            setSuccessMessage({message: "Registrierung fehlgeschlagen!", color: "red"})
        }
    };

    const checkUsername = debounce(() => {
        axios.get(`/api/username-exists/${username}`)
            .then(response => {
                if (response.data.exists) {
                    setUsernameInputMade({made: true, color: "red"});
                } else {
                    setUsernameInputMade({made: true, color: "green"});
                }
            })
            .catch(error => {
                console.error("Error checking username: ", error);
            });
    }, 1000);

    const checkEmail = debounce(() => {
        axios.get(`/api/email-exists/§{email}`)
            .then(response => {
            if (response.data.exists) {
                setEmailInputMade({made: true, color: "red"});
            } else {
                setEmailInputMade({made: true, color: "green"});
            }
        })
    .catch(error => {
            console.error("Error checking email: ", error);
        });
    }, 1000);

    const checkPassword = debounce(() => {

    }, 1000);

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

                    <CustomButton buttonText="Registrieren" buttonClass="registerButton"/>
                    <CustomButton buttonText="Passwort generieren" buttonClass="randoBut#ton"
                                  onClick={generatePassword}/>
                    <label className={styles.successLabel}>success</label>
                    <label className={styles.passwordLabel}>password</label>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;