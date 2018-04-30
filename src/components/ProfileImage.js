import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import ParallaxImage from './ParallaxImage'
import FramePNG from 'src/images/frame.png'
import FrameShadowPNG from 'src/images/frame-shadow.png'
import MarioPNG from 'src/images/mario-front.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    height: 100%;
    @media only screen and (min-width: 75rem) {
        flex: .7;
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
        height: 100%;
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