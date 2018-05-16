import React, { Component } from 'react'
import styled, { keyframes  } from 'styled-components'
import WayPoint from 'react-waypoint'
import color from 'src/constants/color'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18vw;
    height: 18vw;
    @media only screen and (min-width: 45rem) {
        width: 15vw;
        height: 15vw;
    }
    @media only screen and (min-width: 75rem) {
        width: 10vw;
        height: 10vw;
    }
`

const BaseCircle = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: .5vw solid ${color.light};
    transform: translateZ(30px);
`

const CircularWrapper = styled.svg`
`

const Path = styled.path`
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    ${
        ({ animate, percent }) => (animate) ? `animation: progress-${percent} 1s ease-out forwards;` : ``
    }
    animation-delay: .4s;
    @keyframes progress-${ ({ percent}) => percent } {
        100% {
            stroke-dasharray: ${ ({ percent}) => percent } 100;
        }
    }
`

const Text = styled.label`
    position: absolute;
    font-size: 2.5rem;
    font-size: 2.5vw;
    transform: translateZ(50px);
`

class PercenttageCircle extends Component {

    constructor (props) {
        super(props)
        this.state = {
            animate: false
        }
    }

    handleEnter () {
        this.setState({ animate: true })
    }

    render () {
        return (
            <Wrapper>
                <WayPoint onEnter={ () => this.handleEnter() } />
                <BaseCircle>
                    <CircularWrapper viewBox={'0 0 36 36'}>
                        <defs>
                            <linearGradient id={`linear`}>
                                <stop offset={0}   stop-color={color.royal} />
                                <stop offset={100} stop-color={color.green} />
                            </linearGradient>
                        </defs>
                        <Path animate={this.state.animate} percent={this.props.percent}
                            strokeDasharray={`0, 100`}
                            d={`M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831`}
                            stroke={`url(#linear)`}
                        />
                    </CircularWrapper>
                </BaseCircle>
                <Text>
                    {this.props.percent} %
                </Text>
            </Wrapper>
        )
    }
}

export default PercenttageCircle