import React, { Component } from 'react'
import styled, { keyframes  } from 'styled-components'
import color from 'src/constants/color'
import PercentageCircle from './PercentageCircle'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
`

const Text = styled.label`
    margin-top: 10px;
    font-size: 3vw;
    transform: translateZ(30px);
    @media only screen and (min-width: 45rem) {
        margin-top: 20px;
        font-size: 2vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 1.5vw;
    }
`

export default ({ item }) => {
    return (
        <Wrapper id={'parallax'}>
            <PercentageCircle percent={item.percent} />
            <Text>
                {item.name}
            </Text>
        </Wrapper>
    )
}