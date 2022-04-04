import React from 'react'
import useToken from './Hooks/useToken'
import './UnauthenticatedApp.scss'

// Material UI imports
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import { red } from '@mui/material/colors'

// Import images
import youtubeLogo from './Assets/Images/youtube.png'

function UnauthenticatedApp() {
    const [setIsLoggedIn] = useToken(true)

    // Getting API by async await function
    const handleSubmit = async (evt) => {
        evt.preventDefault()

        const { email, password } = evt.target.elements

        const res = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value.trim(),
                password: password.value.trim(),
            }),
        })

        const data = await res.json()

        if (data?.token) {
            setIsLoggedIn(data?.token)
        }
    }

    // Material UI Button Css
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[500],
        },
        padding: '10px',
        borderRadius: '50px',
    }))

    return (
        <section className="unauthentication-app ">
            <div className="container">
                <div className="unauth-box">
                    <img
                        className="unauth-image"
                        src={youtubeLogo}
                        alt="You tube logo"
                        width={150}
                        height={150}
                    />
                    <h1 className="unauth-heading">Log in</h1>
                    <form className="unauth-form" onSubmit={handleSubmit}>
                        <input
                            className="unauth-input"
                            type="email"
                            name="email"
                            placeholder="Phone number, email address"
                            defaultValue="eve.holt@reqres.in"
                        />

                        <input
                            className="unauth-input"
                            type="password"
                            name="password"
                            placeholder="password"
                            defaultValue="cityslicka"
                        />

                        <Stack className="stack" spacing={2} direction="row">
                            <ColorButton
                                className="button "
                                variant="contained"
                                type="submit"
                            >
                                Log In
                            </ColorButton>
                        </Stack>
                    </form>

                    <div className="unauth-links">
                        <div>
                            <a className="unauth-link" href="#">
                                Forgot password?
                            </a>
                        </div>

                        <div>
                            <a className="unauth-link" href="#">
                                Sign up to Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnauthenticatedApp
