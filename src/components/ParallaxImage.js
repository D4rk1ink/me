import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const ImageWrapper = styled.div`
    position: absolute;
    width: ${ ({ size }) => `${size}%` };
`

const ParallaxWrapper = styled.div``

const Image = styled.img`
    width: 100%;
    transform: ${ ({ translateZ }) => `translateZ(${translateZ}px)` };
`

export default ({ src, size, translateZ, fade }) => {
    const fadeProps = {}
    fadeProps[fade] = true
    return (
        <ImageWrapper size={size}>
            <Fade {...fadeProps}>
                <ParallaxWrapper id={'parallax'}>
                    <Image src={src} translateZ={translateZ}/>
                </ParallaxWrapper>
            </Fade>
        </ImageWrapper>
    )
}