import React, {useState} from "react";
import Axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Home from "./pages/Home.jsx";
import ThemeSwitch from "./components/ThemeSwitch.jsx";
import StartPage from "./pages/StartPage.jsx"
import RegisterForm from "./components/RegisterForm.jsx"

export function App() {

    const [isToggled, setIsToggled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        const newMode = !isDarkMode;

        setIsDarkMode(newMode);
        setIsToggled(newMode)
    }

    return (
        <BrowserRouter>
                <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                    <NavBar/>
                    {/*ThemeSwitch isToggled={isToggled} onToggle={() => setIsToggled(handleToggle)}/>*/}
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/register" element={<RegisterForm/>}/>
                        <Route path="/" element={<StartPage/>}/>

                    </Routes>
                </div>
        </BrowserRouter>
    );
}

export default App;