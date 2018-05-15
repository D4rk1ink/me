import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'

const Particle = styled.div`
    border-radius: 50%;
    width: ${ ({ size }) => size }px;
    height: ${ ({ size }) => size }px;
    background-color: #FFFFFF;
    opacity: ${ ({ opacity }) => opacity };
    transition: opacity .5s;
    animation: move-${ ({ move }) => move.key } 30s infinite;
    @keyframes move-${ ({ move }) => move.key } {
        0% {
            transform: ${ ({ move }) => `translate(${move.a.x}vw, ${move.a.y}vh)`};
        }
        33% {
            transform: ${ ({ move }) => `translate(${move.b.x}vw, ${move.b.y}vh)`};
        }
        66% {
            transform: ${ ({ move }) => `translate(${move.c.x}vw, ${move.c.y}vh)`};
        }
        100% {
            transform: ${ ({ move }) => `translate(${move.d.x}vw, ${move.d.y}vh)`};
        }
    }
`

const Ghost = styled.div`
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${ ({ size }) => size }px;
    height: ${ ({ size }) => size }px;
    background-color: #00000000;
    transform: ${ ({ location }) => `translate3d(0vw, 0vh, ${location.z}vw)`};
    animation: initParticle-${ ({ location }) => location.key } 3s forwards;
    @keyframes initParticle-${ ({ location }) => location.key } {
        0% {
            opacity: 0;
            transform: ${ ({ location }) => `translate3d(0vw, 0vh, ${location.z}vw)`};
        }
        100% {
            opacity: 1;
            transform: ${ ({ location }) => `translate3d(${location.x}vw, ${location.y}vh, ${location.z}vw)`};
        }
    }
    
`

export default ({ minSize = 1, maxSize = 4 }) => {
    const size = Math.random() * (maxSize - minSize) + minSize
    const x = Math.random() * (60 - -60) + -60
    const y = Math.random() * (60 - -60) + -60
    const z = Math.random() * (20 - 0) + 0
    const opacity = (Math.random() * (80 - 50) + 50) / 100
    const location = {
        key: Math.floor(Math.random() * 1e+10),
        x, y, z
    }
    const move = {
        key: Math.floor(Math.random() * 1e+10),
        a: {
            x: 0,
            y: 0
        },
        b: {
            x: Math.random() * 5,
            y: Math.random() * 5
        },
        c: {
            x: Math.random() * 5,
            y: Math.random() * 5
        },
        d: {
            x: 0,
            y: 0
        },
    }
    return (
        <Ghost size={size * 20} location={location}>
            <Particle size={size} opacity={opacity} move={move}/>
        </Ghost>
    )
}