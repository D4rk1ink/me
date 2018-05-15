import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Particle from 'src/components/Particle'
import BackgroundPNG from 'src/images/bg.png'

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
`

const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
`

const Background = styled.img`
    height: 100vh;
`

const ParticleWrapper = styled.div`
    position: absolute;
    top: 0;
`

class Header extends Component {

    constructor (props) {
        super(props)
        this.size = Math.round(Math.random() * (200 - 100) + 100)
    }

    render () {
        return (
            <Wrapper>
                <BackgroundWrapper>
                    <Background src={BackgroundPNG}/>
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