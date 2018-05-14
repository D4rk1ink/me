import React, { Component } from 'react'
import Parallax from './Parallax'
import ParticlePanel from './ParticlePanel'
import Header from './Header'
import Menu from './Menu'
import Profile from './Profile'
import Skills from './Skills'
import Works from './Works'

class App extends Component {
    render () {
        return (
            <div>
                <ParticlePanel />
                <Header />
                <Menu />
                <Profile />
                <Skills />
                <Works />
                <Parallax />
            </div>
        )
    }
}

export default App