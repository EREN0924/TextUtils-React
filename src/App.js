import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
/*{import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';}*/


function App() {
  const [mode, setMode] = useState('light')
  const[alert,setAlert] = useState(null)
  const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled","success")

    }
    
  }
  return (
    <>
      {/* <Router> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
       {/*<Switch>*/}
          {/*<Route exact path="/about">*/}
            {/* <About /> */}
          {/*</Route>*/}

          {/*<Route exact path="/">*/}
             <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/> 
          {/*</Route>*/}
        {/*</Switch>*/}
       
   
    </div>
     {/* </Router> */}
    </>
  );
}

export default App;
