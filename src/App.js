import './App.css';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom"

function App() {
  
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

const showAlert = (message, type)=>{
  setAlert({
    msg:message,
    type : type
  })

  setTimeout(()=>
  {
    setAlert(null);
  }, 1500)
}

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark') 
      document.body.style.backgroundColor='#0d0c31'
      showAlert("Dark mode has been enabled" , "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled" , "success")

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}> </Route>
            <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
    
  );
}

export default App;
   