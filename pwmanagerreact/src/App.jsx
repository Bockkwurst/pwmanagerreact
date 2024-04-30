import React, {useState} from "react";
import Axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Home from "./pages/Home.jsx";

export function App() {

    return (
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path="/" element={<Home/>}/>

                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default App;