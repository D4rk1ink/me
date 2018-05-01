import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import WayPoint from 'react-waypoint'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`

const TextWrapper = styled.div`
`

const Text = styled.h2`
    color: ${ props => props.dark ? color.darkBlue : color.light };
    font-size: 5rem;
    font-size: 5vw;
    font-weight: 400;
    text-transform: uppercase;
    @media only screen and (min-width: 45rem) {
        font-size: 3.5rem;
        font-size: 3.5vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 2.5rem;
        font-size: 2.5vw;
    }
`

const Line = styled.div`
    width: ${ ({ width }) => width }%;
    height: 2px;
    background-color: ${color.orangePeel};
    transition: width 1s;
    @media only screen and (min-width: 45rem) {
        height: 3px;
    }
    @media only screen and (min-width: 75rem) {
        height: 4px;
    }
`

class Title extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isPoint: false,
            topLineWidth: 0,
            bottomLineWidth: 0
        }
    }

    setWayPoint () {
        if (!this.state.isPoint) {
            this.setState({ isPoint: true })
            this.setLineWidth()
        }
    }

    setLineWidth () {
        this.setState({
            topLineWidth: Math.round(Math.random() * (30 - 10) + 10),
            bottomLineWidth: Math.round(Math.random() * (50 - 20) + 20)
        })
    }

    render () {
        return (
            <Wrapper>
                <WayPoint onEnter={ () => this.setWayPoint() } />
                <Fade bottom>
                    <TextWrapper>
                        <Line width={this.state.topLineWidth} />
                        <Text dark={this.props.dark} light={this.props.light} onMouseEnter={ () => this.setLineWidth() }>
                            { this.props.title }
                        </Text>
                        <Line width={this.state.bottomLineWidth} />
                    </TextWrapper>
                </Fade>
            </Wrapper>
        )
    }
}

export default Title