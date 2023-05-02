import React, { useState } from 'react'
import {Box, Button, Paper, TextField} from '@mui/material'
import { useTranslation } from 'react-i18next';
import {loginUser} from '../redux/user'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleLogin()
    {
        navigate('/')
    }

    return (
        <Box sx={{display:"grid",placeItems:"center"}}>
            <Paper sx={{width:"450px",maxWidth:"100%",padding:"20px",marginTop:"80px"}}>
                <Box>
                    <TextField onChange={(e)=>dispatch(loginUser({user:e.target.value}))} label={t('name')} fullWidth/>  
                </Box>
                <Button onClick={()=>handleLogin()} 
                variant='contained' fullWidth sx={{marginTop:"20px"}}>{t('login')}</Button>
            </Paper>
        </Box>
    )
}
