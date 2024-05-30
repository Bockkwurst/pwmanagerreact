import {useState} from 'react';
import styles from './compcss/LoginForm.module.css';
import CustomButton from "./CustomButton.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useAuth} from "../utils/AuthProvider.jsx";

const LoginForm = () => {

    const navigate = useNavigate();
    const {setToken} = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [firstName, setFirstName] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8081/login', {username, password});
            if (response.data && response.data.token){
                setToken(response.data.token);
                navigate('/home', {replace: true});
            }else{
                setError('Login failed');
            }
        }catch (error){
            console.error('Login error:', error);
            setError('Login failed');
        }
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        handleLogin();
        setButtonClicked(true);
    }


    return (
        <div className={styles.login}>
            <h1 className={styles.loginTitle}>Login</h1>
            <div className={styles.loginInner}>
                <form>
                    <input className={styles.loginForm} type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                    <input className={styles.loginForm} type="password" placeholder="Password" value={password} onChange={e =>setPassword(e.target.value)}/>
                    <CustomButton buttonText="Login" buttonClass="login" onClick={(event) => handleButtonClick(event)}/>
                </form>
            </div>
        </div>

    )
}

export default LoginForm;
