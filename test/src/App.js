
import './App.css';
import './header.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
import React ,{useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode]=useState("light");
  const[label, setLabel]=useState("light");
  const [style,setStyle]=useState({
    color:"black"
  })

  const [alert, setAlert]=useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })



  }


  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      setLabel("dark");
      document.body.style.background="grey";
      setStyle({
        color:"white"
      });
      showAlert(" Dark Mode Activated", "success");
    }
    else{
      setMode("light");
      setLabel("light");
      document.body.style.background="white";
      setStyle({
        color:"black"
      });
      showAlert(" Light Mode Activated", "success");
    }
    }
  return (
    <>
  <Navbar title="freejam2" field="Home Albums" style={style} label={label} mode ={mode} toggleMode={toggleMode}/>
  <Alert  alert={alert}/>
  <div className="container">
  <Form showAlert={showAlert} mode={mode}/>
  
  </div>

  </>
  );
}

export default App;
