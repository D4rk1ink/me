import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as appAction from 'src/store/actions/app'
import Parallax from './Parallax'
import ParticlePanel from './ParticlePanel'
import Header from './Header'
import Menu from './Menu'
import Profile from './Profile'
import Skills from './Skills'
import Works from './Works'
import Contents from './Contents'
import Activity from './Activity'
import Footer from './Footer'
import * as data from 'src/constants/data'

const Content = styled.div`
`

class Main extends Component {

    constructor (props) {
        super(props)
        this.state = {
            showContent: false
        }
    }

    componentDidMount () {
        this.props.endLoading()
        setTimeout(() => {
            this.setState({ showContent: true })
        }, 1200)
    }

    render () {
        return (
            <div>
                <ParticlePanel />
                <Parallax />
                {
                    this.state.showContent ?
                        (
                            <Content>                               
                                <Header />
                                <Menu />
                                <div id={data.menu.profile}>
                                    <Profile />
                                </div>
                                <div id={data.menu.skills}>
                                    <Skills />
                                </div>
                                <div id={data.menu.works}>
                                    <Works />
                                </div>
                                <div id={data.menu.contents}>
                                    <Contents />
                                </div>
                                <div id={data.menu.activity}>
                                    <Activity />
                                </div>
                                <Footer />
                            </Content>
                        )
                    : false
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endLoading: () => dispatch(appAction.IsLoadingAction(false))
    }
}

export default connect(null, mapDispatchToProps)(Main)