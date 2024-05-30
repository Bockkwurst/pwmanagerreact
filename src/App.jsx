import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import LoginForm from "./components/LoginForm.jsx";
import StartPage from "./pages/StartPage.jsx"
import RegisterForm from "./components/RegisterForm.jsx"
import Home from "./pages/Home.jsx";
import AuthProvider, {useAuth} from "./utils/AuthProvider.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AddPage from "./pages/AddPage.jsx";
import PasswordDetailsPage from "./pages/PasswordDetailsPage.jsx";
import UserDetailsPage from "./pages/UserDetailsPage.jsx";
import RandomizerPage from "./pages/RandomizerPage.jsx";

export function App() {


    return (
        <AuthProvider>
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/register" element={<RegisterForm/>}/>
                        <Route path="/" element={<StartPage/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                        <Route path="/add" element={<AddPage/>}/>
                        <Route path="/pwdetails" element={<PasswordDetailsPage/>}/>
                        <Route path="/userdetails" element={<UserDetailsPage/>}/>
                        <Route path="/randomizer" element={<RandomizerPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;