import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
    position: absolute;
    left: 47vw;
    bottom: 16vw;
    @media only screen and (min-width: 45rem) {
        bottom: 11vw;
    }
    @media only screen and (min-width: 75rem) {
        bottom: 6vw;
    }
`

const BigCircle = styled.div`
    border-radius: 50%;
    width: 18vw;
    height: 18vw;
    background: ${color.darkBlue};
    @media only screen and (min-width: 45rem) {
        width: 15vw;
        height: 15vw;
    }
    @media only screen and (min-width: 75rem) {
        width: 12vw;
        height: 12vw;
    }
`

export default () => {
    return (
        <Wrapper>
            <Fade top>
                <BigCircle />
            </Fade>
        </Wrapper>
    )
}