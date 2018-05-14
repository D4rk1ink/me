import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import ProfileImage from 'src/images/profile.jpg'

const Wrapper = styled.div`
    position: relative;
    margin: 20px 0;
    transform: translateZ(30px);
    
`

const Circle = styled.div`
    width: 22vw;
    height: 22vw;
    border-radius: 50%;
    overflow: hidden;
    @media only screen and (min-width: 45rem) {
        width: 18vw;
        height: 18vw;
    }
    @media only screen and (min-width: 75rem) {
        width: 13vw;
        height: 13vw;
    }
`

const Image = styled.img`
    width: 100%;
`

export default () => {
    return (
        <Wrapper>
            <Fade bottom>
                <Circle>
                    <Image src={ProfileImage} />
                </Circle>
            </Fade>
        </Wrapper>
    )
}