import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as appAction from 'src/store/actions/app'
import Parallax from './Parallax'
import ParticlePanel from './ParticlePanel'
import Header from './Header'
import Menu from './Menu'
import Profile from './Profile'
import Skills from './Skills'
import Works from './Works'

const mapDispatchToProps = dispatch => {
    return {
        endLoading: () => dispatch(appAction.IsLoadingAction(false))
    }
}

class Main extends Component {

    componentDidMount () {
        this.props.endLoading()
    }

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

export default connect(null, mapDispatchToProps)(Main)