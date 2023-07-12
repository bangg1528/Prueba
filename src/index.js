import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarSmall from './components/NavbarSmall';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarSmall/>
    <Navbar/>
    <App/>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


