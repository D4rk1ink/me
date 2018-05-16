import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateZ(-5vw);
    font-size: 8vw;
    @media only screen and (min-width: 45rem) {
        bottom: 18vw;
    }
    @media only screen and (min-width: 75rem) {
        bottom: 18vw;
    }
`

const Icon = styled.i`
    background: linear-gradient(to right, ${color.royal}, ${color.sky});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Text = styled.label`
    font-size: 1.5vw;
`

export default ({ item }) => {
    return (
        <Wrapper>
            <Icon className={`fa fa-${item.icon}`} />
            <Text>{ item.name }</Text>
        </Wrapper>
    )
}