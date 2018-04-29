import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import { Fade, Flip } from 'react-reveal'
import MarioImage from 'src/images/mario-front.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    @media only screen and (min-width: 45rem) {
        flex: .8;
    }
    @media only screen and (min-width: 75rem) {
        flex: 1;
    }
`

const ImageWrapper = styled.div`
    width: 25%;
    @media only screen and (min-width: 45rem) {
        width: 40%;
    }
    @media only screen and (min-width: 75rem) {
        width: 40%;
    }
`

const Image = styled.img`
    width: 100%;
`

export default () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Flip left>
                    <Image src={MarioImage} />
                </Flip>
            </ImageWrapper>
        </Wrapper>
    )
}