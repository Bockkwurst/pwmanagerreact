import React, {useState} from "react";
import Axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "../components/Navbar.jsx";
import LoginForm from "../components/LoginForm.jsx";
import "./pagesCss/home.css"

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Home</h1>
        </div>
    );
}

export default Home;
