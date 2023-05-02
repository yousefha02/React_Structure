import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Home() {
    const {t} = useTranslation()
    const {user} = useSelector((state)=>state.user)
    return (
        <Container sx={{marginTop:"40px"}}>
            <Typography sx={{fontSize:"28px"}}>{t('welcome')} {user}</Typography>
        </Container>
    )
}
