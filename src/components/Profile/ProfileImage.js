import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import color from 'src/constants/color'
import ParallaxImage from 'src/components/ParallaxImage'
import FramePNG from 'src/images/frame.png'
import FrameShadowPNG from 'src/images/frame-shadow.png'
import MarioPNG from 'src/images/mario-front.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vw;
    @media only screen and (min-width: 45rem) {
        height: 60vw;
    }
    @media only screen and (min-width: 75rem) {
        height: 100%;
        flex: .5;
    }
`

const ImagesWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    @media only screen and (min-width: 45rem) {
        width: 30%;
    }
    @media only screen and (min-width: 75rem) {
        width: 50%;
    }
`

export default () => {
    return (
        <Wrapper>
            <ImagesWrapper>
                <ParallaxImage translateZ={-100} src={MarioPNG} fade={'bottom'} size={50} />
                <ParallaxImage translateZ={-50} src={FrameShadowPNG} fade={'top'} size={100} />
                <ParallaxImage translateZ={20} src={FramePNG} fade={'top'} size={100} />
            </ImagesWrapper>
        </Wrapper>
    )
}