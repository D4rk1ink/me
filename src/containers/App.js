import React, { Component } from 'react'
import Parallax from './Parallax'
import ParticlePanel from './ParticlePanel'
import Header from './Header'
import Menu from './Menu'
import Profile from './Profile'

class App extends Component {
    render () {
        return (
            <div>
                <ParticlePanel />
                <Header />
                <Menu />
                <Profile />
                <Parallax />
            </div>
        )
    }
}

export default App