import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import i18next from 'i18next';
import { useDispatch,useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../redux/languageSlice';
import {logoutUser} from '../redux/user'

export default function ButtonAppBar() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {lang} = useSelector((state)=>state.lang)
    const {user} = useSelector((state)=>state.user)

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
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {t('title')}
            </Typography>
            <Box>
                {
                    lang==="ar"?
                    <Button onClick={()=>changeLanugage('en')} color="inherit">{t('ar')}</Button>
                    :
                    <Button onClick={()=>changeLanugage('ar')} color="inherit">{t('en')}</Button>
                }
                {!user&&<Button color="inherit" onClick={()=>navigate('/login')}>{t('login')}</Button>}
                {user&&<Button color="inherit" onClick={()=>dispatch(logoutUser())}>{t('logout')}</Button>}
            </Box>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
