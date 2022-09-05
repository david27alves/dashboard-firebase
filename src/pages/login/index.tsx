import React, { useContext, useState } from "react"

import { Box, Button, createTheme, TextField, ThemeProvider, Typography } from "@mui/material"
import { Container } from "@mui/system"

import { ContextAuth } from "../../contexts/contextAuth"
import { Navigate } from "react-router-dom"

import bg_login from '../../statics/bg_login.png'


function Login() {

    const theme = createTheme()
    theme.typography.h5 = {
        fontSize: '3rem',
        fontFamily: 'Roboto',
        fontWeight: 100
    }

    const { handleSignIn, logged } = useContext(ContextAuth)

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    
    async function loginWithEmail(email: string, pass: string) {
        await handleSignIn(email, pass)
    }

    if (!logged) {
        return (

            <ThemeProvider theme={theme}>
            
                <Container component='main' sx={{
                    display: 'flex',
                    marginTop: 15
                    
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: 8,
                        marginLeft: 2,
                        marginRight:5
                        
                    }}>
                        <Typography
                        component='h1'
                        variant='h5'
                        sx={{
                            textAlign: 'left',
                        }}
                        >
                        Realizar login 
                        </Typography>
                        <Box 
                            component='form'
                            onSubmit={(e: React.SyntheticEvent) => {
                                e.preventDefault()

                                loginWithEmail(email, pass)
                            }}
                        >
                            <TextField 
                                margin='normal'
                                fullWidth
                                required
                                label='Email'
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            <TextField 
                                margin='normal'
                                fullWidth
                                required
                                label='Senha' 
                                type='password'
                                onChange={(e) => setPass(e.target.value)}
                            />
                            <Button 
                                type="submit"
                                variant='contained'
                                fullWidth
                                sx={{
                                    padding: 2,
                                    marginTop: 2                        
                                }}
                                >
                                Login
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        
                        <Box component='img' width={500} src={bg_login}></Box>
                    </Box>
                </Container>
            </ThemeProvider>
        )
    } else {
        return <Navigate to="/home" />
    }
    
}

export default Login