import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import * as data from 'src/constants/data'

const Wrapper = styled.div`
    text-align: center;
    position: relative;
    color: ${color.light};
    transform: translateZ(30px);
`

const Title = styled.h1`
    background: linear-gradient(to right, ${color.royal}, ${color.sky});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 6rem;
    font-size: 6vw;
    font-weight: 600;
    @media only screen and (min-width: 45rem) {
        font-size: 5rem;
        font-size: 5vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 4rem;
        font-size: 4vw;
    }
`

const SubTitle = styled.h3`
    background: linear-gradient(to right, ${color.royal}, ${color.sky});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
    font-size: 4vw;
    font-weight: 400;
    @media only screen and (min-width: 45rem) {
        font-size: 3rem;
        font-size: 3vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 2rem;
        font-size: 2vw;
    }
`

export default () => {
    return (
        <Wrapper>
            <Fade left>
                <Title>
                    { data.header.title }
                </Title>
            </Fade>
            <Fade right>
                <SubTitle>
                    { data.header.sub }
                </SubTitle>
            </Fade>
        </Wrapper>
    )
}
