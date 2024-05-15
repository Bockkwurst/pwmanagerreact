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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const generatePassword = () => {
        const length = 12;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-";
        let retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(retVal);
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        if (!isPasswordValid) {
            setMessage('Passwort entspricht nicht den Anforderungen');
            setMessageColor('lightred');
            return;
        }
        if (password !== passwordConfirmation) {
            setMessage('Passwörter stimmen nicht überein!');
            setMessageColor('lightred');
            return;
        }
        console.log(username, password, firstName, lastName, email);
        try {
            const response = await axios.post('http;//localhost:8091/register', {
                username, password, firstName, lastName, email,
            });
            if (response.data.success) {
                setMessage('Registrierung erfolgreich!');
                setMessageColor('lightgreen');
            } else {
                setMessage('Registrierung fehlgeschlagen!');
                setMessageColor('lightred');
            }
            setUsername('');
            setPassword('');
            setPasswordConfirmation('');
            setEmail('');
            setFirstName('');
            setLastName('');
            setIsUsernameTaken(false);
            setIsEmailTaken(false);
            setDoPasswordsMatch(false);
            setEmailInputMade(false);
            setUsernameInputMade(false);
            setPasswordInputMade(false);
            setIsPasswordValid(true);
        } catch (error) {
            setMessage('Registrierung fehlgeschlagen');
            setMessageColor('lightred');
        }
    };

    const checkUsername = debounce(async () => {
        try {
            const response = await axios.get(`http://localhost:8081/check-username/${username}`);
            setIsUsernameTaken(response.data.taken);
            console.log('isUsernameTaken', isUsernameTaken);
        } catch (error) {
            console.error(error);
        }
    }, 1000);
    useEffect(() => {
        if (username) {
            setUsernameInputMade(true);
            checkUsername();
        }
    }, [username])

    const checkEmail = debounce(async() => {
      try{
          const response = await axios.get(`http://localhost:8081/check-email/${email}`);
          console.log(response.data);
          setIsEmailTaken(response.data.taken);
      }catch (error){
          console.error(error);
      }
    }, 1000);
    useEffect(() => {
        if (email) {
            setEmailInputMade(true);
            checkEmail();
        }
    }, [email]);

    const checkPassword = debounce((password) => {
        if (password !== passwordConfirmation) {
            setPasswordInputMade({made: true, color: "lightred"})
            setDoPasswordsMatch(false);
        } else if (password.length < 8 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
            setPasswordInputMade({made: true, color: "lightred"});
            setIsPasswordValid(false);
        } else {
            setPasswordInputMade({made: true, color: "lightgreen"});
            setDoPasswordsMatch(true)
            setIsPasswordValid(true)
        }
    }, 1000);
    useEffect(() => {
        if (password || passwordConfirmation){
            checkPassword(password);
        }
    }, [password, passwordConfirmation]);

    return (
        <div className={styles.register}>
            <h1 className={styles.registerTitle}>Registrieren</h1>
            <div className={styles.registerInner}>
                <form className={styles.registerFormContainer}>
                    <input className={styles.registerForm} type="text" placeholder="Username"/>
                    <input className={styles.registerForm} type="text" placeholder="Vorname"/>
                    <input className={styles.registerForm} type="text" placeholder="Nachname"/>
                    <input className={styles.registerForm} type="text" placeholder="Email"
                           style={{backgroundColor: emailInputMade.made ? emailInputMade.color : "white"}}
                           onChange={e => {
                               setEmail(e.target.value);
                               checkEmail();
                           }}/>
                    <input className={styles.registerForm} type="password" placeholder="Passwort"
                           style={{backgroundColor: passwordInputMade.made ? passwordInputMade.color : "white"}}
                           onChange={e => {
                               setPasswordConfirmation(e.target.value);
                               checkPassword();
                           }}/>
                    <input className={styles.registerForm} type="password" placeholder="Passwort wiederholen"
                           style={{backgroundColor: passwordInputMade.made ? passwordInputMade.color : "white"}}
                           onChange={e => {
                               setPasswordConfirmation(e.target.value);
                               checkPassword();
                           }}/>
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