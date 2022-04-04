import React from 'react'
import './App.scss'

import AuthenticationApp from './AuthenticationApp'
import UnauthenticationApp from './UnauthenticationApp'

import useToken from './Hooks/useToken'

function App() {
    const [setIsLoggedIn] = useToken()

    if (setIsLoggedIn) {
        return <AuthenticationApp />
    } else {
        return <UnauthenticationApp />
    }
}

export default App
