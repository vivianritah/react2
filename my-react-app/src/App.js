import React from 'react';
import logo from './flower.avif';

import './App.css';
import ShoppingList from './components/shoppingList'; // Ensure the component name matches the file name
import Tables from './components/table';
import Car from './components/cars';
import Goal from './components/goal';
import Country from './components/country';
import MyForm from './components/form'
import ApplicationForm from './components/applicationForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/pages/Layout";
import Home from "../src/pages/Home";
import Blogs from "../src/pages/Blog";
import Contact from "../src/pages/Contact";
import NoPage from "../src/pages/Nopage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Vivian Ritah<code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ShoppingList name="social media platforms" />
      <Tables/>
      <Car/>
      <ApplicationForm name="application form" />
      <Goal/>
      <Country name="Region"/>
      <MyForm/>
    </div>
  );
}

export default App;
