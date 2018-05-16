import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Particle from 'src/components/Particle'
import BackgroundPNG from 'src/images/bg.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
`

const BackgroundWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
`

const BackgroundImage = styled.img`
    ${ ({ isFullWidth }) => isFullWidth ? 'width: 100vw' : 'height: 100vh' };
`

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(#ffffff00, #000000fc);
`

const ParticleWrapper = styled.div`
    position: absolute;
`

class Header extends Component {

    constructor (props) {
        super(props)
        this.size = 40
        this.isFullWidth = window.innerWidth / window.innerHeight > 1.77
    }

    shouldComponentUpdate () {
        return false
    }

    render () {
        return (
            <Wrapper>
                <BackgroundWrapper>
                    <BackgroundImage src={BackgroundPNG} isFullWidth={this.isFullWidth}/>
                    <BackgroundOverlay />
                </BackgroundWrapper>
                <ParticleWrapper id={'parallax'}>
                    {
                        new Array(this.size).fill(null).map((item, i) => {
                            return <Particle key={i} />
                        })
                    }
                </ParticleWrapper>
            </Wrapper>
        )
    }
}

export default Header