import React, {useEffect, useState} from "react";
import styles from './compcss/registerForm.module.css';
import CustomButton from './CustomButton.jsx'
import debounce from "../utils/Debounce.js";
import axios from "axios";

const RegisterForm = () => {

    const [password, setPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState({message: "", color: ""});
    const [successMessageColor, setSuccessMessageColor] = useState({color: ""});
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
    const [confirmPasswordInputMade, setConfirmPasswordInputMade] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const setUsernameInputMadeDebounced = debounce(setUsernameInputMade, 1000);
    const setPasswordInputMadeDebounced = debounce(setPasswordInputMade, 1000);
    const setConfirmPasswordInputMadeDebounced = debounce(setConfirmPasswordInputMade, 1000);
    const setEmailInputMadeDebounced = debounce(setEmailInputMade, 1000);
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('green');
    const emailRegex = /^[\s@]+@[^\s@]+\.[\s@]+$/;

    useEffect(() => {
        if (username) {
            setUsernameInputMadeDebounced(true);
            checkUsername();
        }
    }, [username])

    useEffect(() => {
        if (email) {
            setEmailInputMadeDebounced(true);
            checkEmail(email);
        }
    }, [email]);

    useEffect(() => {
        if (password && passwordConfirmation) {
            checkPassword(password, passwordConfirmation);
        }
    }, [password, passwordConfirmation]);

    useEffect(() => {
        console.log(firstName);
    }, [firstName]);

    useEffect(() => {
        console.log(lastName);
    }, [lastName]);

    const generatePassword = () => {
        event.preventDefault();
        const length = 12;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-";
        let retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(retVal);
        setPasswordConfirmation(retVal);
        setPasswordMessage(`${retVal}`)
    };



    const handleRegister = async (event) => {
        event.preventDefault();
        if (!isPasswordValid) {
            setSuccessMessage('Passwort entspricht nicht den Anforderungen');
            setSuccessMessageColor()('red');
            return;
        }
        if (password !== passwordConfirmation) {
            setSuccessMessage('Passwörter stimmen nicht überein!');
            setSuccessMessageColor('red');
            return;
        }

        console.log(username, firstName, lastName, email, password);
        try {
            const response = await axios.post('http://localhost:8081/register', {
                username, firstName, lastName, email, password
            });
            if (response.data.success) {
                setSuccessMessage('Registrierung erfolgreich!');
                setSuccessMessageColor('green');
            } else {
                setSuccessMessage('Registrierung fehlgeschlagen!');
                setSuccessMessageColor('red');
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
            setSuccessMessage('Registrierung fehlgeschlagen');
            setSuccessMessageColor('lightred');
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



    const checkEmail = debounce(async (email) => {
        try {
            const response = await axios.get(`http://localhost:8081/check-email/${email}`);
            console.log(response.data);
            setIsEmailTaken(response.data.taken);
        } catch (error) {
            console.error(error);
        }
    }, 1000);


    const checkPassword = ((password, passwordConfirmation) => {
        if (password !== passwordConfirmation) {
            setPasswordInputMadeDebounced({made: true, color: "lightred"});
            setConfirmPasswordInputMadeDebounced({made: true, color: "lightred"});
            console.log('passwords do not match', password, passwordConfirmation);
            setDoPasswordsMatch(false);
        } else if (password.length < 8 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
            setPasswordInputMadeDebounced({made: true, color: "lightred"});
            setConfirmPasswordInputMadeDebounced({made: true, color: "lightred"});
            console.log('password does not meet requirements', password, passwordConfirmation);
            setIsPasswordValid(false);
        } else {
            setPasswordInputMade({made: true, color: "lightgreen"});
            setConfirmPasswordInputMadeDebounced({made: true, color: "lightgreen"});
            setDoPasswordsMatch(true)
            setIsPasswordValid(true)
        }
    });


    return (
        <div className={styles.register}>
            <h1 className={styles.registerTitle}>Registrieren</h1>
            <div className={styles.registerInner}>
                <form className={styles.registerFormContainer}>
                    <input className={styles.registerForm} type="text" placeholder="Username"
                           style={{backgroundColor: usernameInputMade ? (isUsernameTaken ? "lightred" : "lightgreen") : "white"}}
                           onChange={e => {
                               setUsername(e.target.value);
                               checkUsername();
                           }}/>
                    <input className={styles.registerForm} type="text" placeholder="Vorname"
                           onChange={e => {
                               setFirstName(e.target.value);
                           }}/>
                    <input className={styles.registerForm} type="text" placeholder="Nachname"
                           onChange={e => {
                               setLastName(e.target.value);
                           }}/>
                    <input className={styles.registerForm} type="text" placeholder="Email"
                           style={{backgroundColor: emailInputMade ? (isEmailTaken ? "lightred" : "lightgreen") : "white"}}
                           onChange={e => {
                               setEmail(e.target.value);
                               checkEmail();
                           }}/>
                    <input className={styles.registerForm} type="password" placeholder="Passwort"
                           value={password}
                           style={{backgroundColor: passwordInputMade.made ? passwordInputMade.color : "white"}}
                           onChange={e => {
                               setPassword(e.target.value);
                               checkPassword(e.target.value, passwordConfirmation);
                           }}/>
                    <input className={styles.registerForm} type="password" placeholder="Passwort wiederholen"
                           value={passwordConfirmation}
                           style={{backgroundColor: confirmPasswordInputMade.made ? confirmPasswordInputMade.color : "white"}}
                           onChange={e => {
                               setPasswordConfirmation(e.target.value);
                               checkPassword(password, e.target.value);
                           }}/>
                    <CustomButton buttonText="Registrieren" buttonClass="registerButton"
                                  onClick={handleRegister}/>
                    <CustomButton buttonText="Passwort generieren" buttonClass="randoBut#ton"
                                  onClick={generatePassword}/>
                    <label className={styles.successLabel}
                           style={{color: successMessageColor.color}}>{successMessage.message}</label>
                    <label className={styles.passwordLabel}>{passwordMessage}</label>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;