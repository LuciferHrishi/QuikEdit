
import './App.css';
import './header.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import React ,{useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState("light");
  const[label, setLabel]=useState("light");
  const [style,setStyle]=useState({
    color:"black"
  })


  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleFire=()=>{
    document.body.style.background="#FF474D";
    setMode("dark");
    setLabel("dark");
    setStyle({
      color:"white"
    });

  }

  const toggleCalm=()=>{
    document.body.style.background="#FFFAA0";
    setMode("light");
    setLabel("light");
    setStyle({
      color:"black"
    });
  }

  const toggleBreeze=()=>{
    document.body.style.background="#DAF7A6";
    setMode("light");
    setLabel("light");
    setStyle({
      color:"black"
    });
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      setLabel("dark");
      document.body.style.background="grey";
      setStyle({
        color:"white"
      });
      showAlert("Welcome to Dark Side!","success");
    }
    else{
      setMode("light");
      setLabel("light");
      document.body.style.background="white";
      setStyle({
        color:"black"
      });
      showAlert("Welcome to Light Side!","success");
    }
    }
  return (
    <>
    <Router>
  <Navbar toggleFire={toggleFire} toggleCalm={toggleCalm} toggleBreeze={toggleBreeze} title="QuikEdit" field="Home" style={style} label={label} mode ={mode} toggleMode={toggleMode}/>
  <div className="container">
  <Alert alert={alert}/>
  <Routes>
  <Route exact path="/" element={<Form showAlert={showAlert} mode={mode} />} />
  <Route exact path="/about" element= {<About style={style}  mode={mode} />} />
  </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
