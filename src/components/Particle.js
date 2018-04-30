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
    transform: ${ ({ translate }) => `translate3d(${translate.x}vw, ${translate.y}vh, ${translate.z}vw)`};
`

export default ({ minSize = 2, maxSize = 10 }) => {
    const size = Math.random() * (maxSize - minSize) + minSize
    const x = Math.random() * (140 - -40) + 0
    const y = Math.random() * (140 - -40) + 0
    const z = Math.random() * (20 - 0) + 0
    const opacity = (Math.random() * (80 - 50) + 50) / 100
    return (
        <Ghost size={size * 20} translate={{x,y,z}}>
            <Particle size={size} opacity={opacity}/>
        </Ghost>
    )
}