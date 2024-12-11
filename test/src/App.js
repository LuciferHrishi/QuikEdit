
import './App.css';
import './header.css';

import Navbar from './components/Navbar';
import Form from './components/Form';



function App() {
  return (
    <>
  <Navbar title="freejam2" field="Home Albums"/>
  <div className="container">
  <Form/>
  
  </div>

  </>
  );
}

export default App;
