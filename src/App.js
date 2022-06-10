// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Submit from "./components/Submit";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Nav />
            <Submit />
            <Form />
        </div>
    );
}

export default App;