import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import ProfileImage from 'src/images/profile.jpg'

const Wrapper = styled.div`
    position: relative;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px 0;
    @media only screen and (min-width: 45rem) {
        width: 18vw;
        height: 18vw;
    }
    @media only screen and (min-width: 75rem) {
        width: 12vw;
        height: 12vw;
    }
`

const Image = styled.img`
    width: 100%;
`

export default () => {
    return (
        <Fade bottom>
            <Wrapper>
                <Image src={ProfileImage} />
            </Wrapper>
        </Fade>
    )
}