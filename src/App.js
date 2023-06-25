import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Mainbody from './Components/Mainbody';
import Validform from './Components/Validform';
import About_us from './Components/About_us';
import React, { useState } from 'react';
import Alert from './Components/Alert_'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './Components/Contact';

// let navarr = ['login-form', 'HOME ', 'Link', 'Dropdown', 'disable'];
// let navarr = [{ title: "About", link: "/about", children: ['Another', 'Another action', ' ', 'Something else here'] }, 'login-form', 'HOME ', 'Link', 'Dropdo ', 'disae'];
// let title="Kali";


function App() {
  // const [sclor, setClor] = useState(null);

  const [smode, setMode] = useState('light');

  const [alerte, setAlert] = useState(null);

  const funalertshow = (message, type) => {
    // if (smode === 'light') {
    //   setAlert(  message);
    // }
    // else {
    //   setAlert(message);
    // }
    setAlert(
      {
        msg: message,
        typ: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const funclor = (bkg, clr) => {
    // setClor(bkg);
    document.body.style.backgroundColor = bkg;
    document.body.style.color = clr;

  }

  const brightness = () => {
    if (smode === 'light') {
      setMode('dark');
      funclor('black', 'white');
      // document.body.styg   le.backgroundColor = 'black';
      // document.body.style.color = 'white';
      funalertshow('Dark', 'success');
      document.title = "Dark - mode"
    }
    else {
      setMode('light');
      funclor('white', 'black');
      // document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      funalertshow('Light', 'danger');
      document.title = "Light - mode"
    }

  }

  return (
    // <Navbar title={Kalinux} navarr={navarr} />
    // <Navbar title="Kalinux" />
    // <Navbar home="New-home" />
    // <div >
    //     <Validform />
    // </div>

    // <div>
    //  <About_us /> 
    // </div>

    <div>

      <Router>
        <Navbar title="Word-Counter" home="New-home" mode={smode} togglebright={brightness} />
        <Alert showalert={alerte} />
        <Routes>

          <Route exact path="/Mainbody" element={<Mainbody funalertshow={funalertshow} heading="Enter the Text" />} />
          <Route exact path="/About_us" element={<About_us />} />
          <Route exact path='/Validform' element={<Validform />} />
          <Route exact path='/Contact' element={<Contact />} />

        </Routes>
      </Router>


    </div >
  );
}

export default App;
