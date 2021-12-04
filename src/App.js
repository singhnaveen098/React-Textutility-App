import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const color = {
    'dark':'#17191c',
    'success':'#3c913c',
    'danger':'#e95c5c'
  }
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const togglemode = (cmode)=>{
    if(mode===cmode){
      setmode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showalert("Light mode has been enabled.", "success")
    }
    else {
      setmode(cmode)
      document.body.style.backgroundColor = color[cmode]
      document.body.style.color = 'white'
      let nmode = cmode[0].toUpperCase() + cmode.slice(1)
      showalert(`${nmode} mode has been enabled.`, "success")
      // setInterval(() => {
      //   document.title='Install textutils now'
      // }, 500);
      // setInterval(() => {
      //   document.title='Textutils is amazing'
      // }, 700);
    }
  }
  const showalert = (msg, type)=>{
    setalert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <Router>
      <>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <Textform heading="Enter your text to analyze : " mode={mode} showalert={showalert} textcolor={color}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode} textcolor={color}/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
