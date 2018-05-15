import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import color from 'src/constants/color'
import UfoSVG from 'src/images/ufo.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    
    width: 100vw;
    height: 100vh;
    z-index:999;
`

const Background = styled.div`
    width: 100%;
    height: 100;
    background-color: ${color.back};
`

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18vw;
    height: 18vw;
    @media only screen and (min-width: 75rem) {
        width: 10vw;
        height: 10vw;
    }
`

const Image = styled.img`
    position: absolute;
    width: 100%;
    animation: movedUFO ease 3s infinite;
    @keyframes movedUFO {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`

const TextLoading = styled.label`
    font-size: 4vw;
    font-weight: 600;
    background: linear-gradient(to right, #4761ac, #54c2ef);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media only screen and (min-width: 75rem) {
        font-size: 2vw;
    }
`

export default ({ isLoading }) => {
    return (
        <Wrapper>
            <Fade collapse when={isLoading}>
                <Background />
            </Fade>
            <Fade collapse top when={isLoading}>
                <ImageWrapper>
                    <Image src={UfoSVG} />
                </ImageWrapper>
            </Fade>
            <Fade collapse bottom when={isLoading}>
                <TextLoading>
                    Loading...
                </TextLoading>
            </Fade>
        </Wrapper>
    )
}