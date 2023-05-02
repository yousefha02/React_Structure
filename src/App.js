import './App.css';
import {createTheme,ThemeProvider,Button, Typography,Box} from '@mui/material'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { changeLanguage } from './redux/languageSlice';

const theme = createTheme({
  direction:"rtl",
})

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    const lang = Cookies.get("i18next") || "en";
    if(lang==="ar"){
      document.body.dir="rtl"
    }
    else{
      document.body.dir="ltr"
    }
  },[])

  const {t} = useTranslation()

  function changeLanugage(lang)
  {
      i18next.changeLanguage(lang);
      dispatch(changeLanguage({lang:lang}));
      if(lang==="ar"){
        document.body.dir="rtl"
      }
      else{
        document.body.dir="ltr"
      }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column",marginY:"40px"}}>
          <Box sx={{display:"flex",columnGap:"10px",marginBottom:"20px"}}>
            <Button onClick={()=>changeLanugage('ar')} variant="contained">ar</Button>
            <Button onClick={()=>changeLanugage('en')} variant="contained">en</Button>
          </Box>
          <Typography>{t('hello')}</Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
