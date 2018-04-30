import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`

const Title = styled.h2`
    color: ${ props => props.dark ? color.darkBlue : color.light };
    font-size: 6rem;
    font-size: 6vw;
    font-weight: 400;
    @media only screen and (min-width: 45rem) {
        font-size: 4rem;
        font-size: 4vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 3rem;
        font-size: 3vw;
    }
`

export default ({ title, dark, light }) => {
    return (
        <Wrapper>
            <Fade bottom>
                <Title dark light>
                    { title }
                </Title>
            </Fade>
        </Wrapper>
    )
}