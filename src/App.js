import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login'
import { Routes ,Route,Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';

const theme = createTheme({
  direction:"rtl",
})

function App() {

  useEffect(()=>{
    const lang = Cookies.get("i18next") || "en";
    if(lang==="ar"){
      document.body.dir="rtl"
    }
    else{
      document.body.dir="ltr"
    }
  },[])

  const {user} = useSelector((state)=>state.user)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Routes>
          <Route path='' element={user?<Home/>:<Navigate to="/login"/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
