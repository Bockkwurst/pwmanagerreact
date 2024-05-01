import React, {useState} from "react";
import Axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Home from "./pages/Home.jsx";
import ThemeSwitch from "./components/ThemeSwitch.jsx";

export function App() {

    const [isToggled, setIsToggled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
            <BrowserRouter>
                <div className={isDarkMode ? 'dark-mode' : 'light-mode' }>
                    <NavBar/>
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/" element={<Home/>}/>

                    </Routes>
                    <ThemeSwitch isToggled={isToggled} onToggle={() => setIsToggled(handleToggle)} rounded={true}/>
                </div>
            </BrowserRouter>
    );
}

export default App;