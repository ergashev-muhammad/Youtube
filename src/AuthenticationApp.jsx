import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Channel from './Pages/Channel/Channel'
import Video from './Pages/Video/Video'

function AuthenticatedApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/channel" element={<Channel />} />
                <Route path="/video/2" element={<Video />} />
            </Routes>
        </>
    )
}

export default AuthenticatedApp
