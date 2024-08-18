// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'

// Importing React Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// let name = "datta";



function App() {
  let [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-muted')
    document.body.classList.remove('bg-white')
  }

  let toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      // showAlert("Dark mode has been enabled", "success")
      // document.title = 'MyWebsite - Home.DarkMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      // showAlert("Light mode has been enabled", "success")
      // document.title = 'MyWebsite - Home.LightMode';
    }
  }

  return (
    <>
      <Router>

        <Navbar title="MyWebsite" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">

          <Routes>
            <Route exact path='home' element={<TextForm showAlert={showAlert} heading="Word & Character - Counter " mode={mode} />} />
            <Route exact path='about' element={<About mode={mode}/>} />
          </Routes>

        </div>

      </Router>
    </>
  );
}

export default App;
