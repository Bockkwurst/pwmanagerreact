import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import LoginForm from "./components/LoginForm.jsx";
import StartPage from "./pages/StartPage.jsx"
import RegisterForm from "./components/RegisterForm.jsx"
import Home from "./pages/Home.jsx";

export function App() {


    return (
        <BrowserRouter>
                <div>
                    <NavBar/>
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/register" element={<RegisterForm/>}/>
                        <Route path="/" element={<StartPage/>}/>
                        <Route path="/home" element={<Home/>}/>

                    </Routes>
                </div>
        </BrowserRouter>
    );
}

export default App;