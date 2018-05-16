import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import WayPoint from 'react-waypoint'

const Wrapper = styled.div`
    display: none;
    position: absolute;
    top: 50vh;
    width: 100%;
    height: 100%;
    @media only screen and (min-width: 75rem) {
        display: block;
    }
`

const ImageWrapper = styled.div`
    position: fixed;
    width: 10vw;
    top: ${ ({ y }) => `${y}vh` };
    left: ${ ({ x }) => `${x}vw` };
`

const ImageParallax = styled.img`
    width: 100%;
`

class ParallaxScroll extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isEnter: false,
            isLeave: false
        }
    }

    onEnter () {
        this.setState({ isEnter: true })
    }

    onLeave () {
        this.setState({ isEnter: false })
    }

    render () {
        return (
            <Wrapper>
                <ImageWrapper x={this.props.x} y={this.props.y}>
                    <Fade top when={this.state.isEnter}>
                        <ImageParallax src={this.props.src} />
                    </Fade>
                </ImageWrapper>
                <WayPoint onLeave={ () => this.onLeave() } onEnter={ () => this.onEnter() } />
            </Wrapper>
        )
    }
}

export default ParallaxScroll