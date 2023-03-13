// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  const [mode,setMode] = useState('light')
  const[text,setText] = useState('Enable Dark Mode')
  const[alert,setAlert] = useState(null)

  const alertSettings = (message, type) => {
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      setText("Enable Light Mode")
      document.body.style.backgroundColor = '#3A3B3C'
      alertSettings("Dark Mode has been enabled", "success")
    }else{
      setMode('light')
      setText("Enable Dark Mode")
      document.body.style.backgroundColor = 'white'
      alertSettings("Light Mode has been enabled", "success")
    }
  }
  return (
   <>
   <Navbar title="TextUtils" link1="Home" link2="About Us" theme={mode} toggleMode={toggleMode} value={text}/>
   <Alerts alert={alert} />
   <Textform theme={mode}/>     
   </>
  );
}

export default App;
