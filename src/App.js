import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 1800);
  };
  const toggleMode = () => {
    const nextMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
    document.body.dataset.theme = nextMode;
    showAlert(`${nextMode === 'dark' ? 'Dark' : 'Light'} mode enabled`, 'success');
  };

  return (
    <Router>
      <div className={`textutils-app theme-${mode}`}>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
        <main className="app-main">
          <Switch>
            <Route exact path="/about"><About mode={mode} /></Route>
            <Route exact path="/"><TextForm heading="TextUtils" mode={mode} showAlert={showAlert} /></Route>
          </Switch>
        </main>
        <footer className="app-footer"><span>TextUtils</span><span>A little more clarity, one word at a time.</span></footer>
      </div>
    </Router>
  );
}

export default App;
