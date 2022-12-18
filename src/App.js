import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  let tooglemode = ()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor = '#090d1e';
      showAlert("Dark mode has been enabled","Success");
      document.title='Text Utils -DarkMode';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
      document.title='Text Utils -LightMode';
    }
  }
  
  const showAlert= (message,type)=>{
    setAlert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  return (
    <>
     {/* <BrowserRouter> */}
     <Navbar header="TextUtils"  mode={mode} tooglemode={tooglemode}/>
     <Alert alert={alert} />
     <div className="container">
     {/* <Routes> */}
            {/* <Route path="/about" element={<About />}> */}
            {/* </Route>
            <Route path="/" element={}>
            </Route>
      </Routes>
      */}
     {/* <About/> */}
     <Textbox heading="Enter text to analyze"  mode={mode} func={showAlert} />
     </div>
     {/* </BrowserRouter> */}
     
    </>
  );
}

export default App;
