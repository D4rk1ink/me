import React, { Component } from 'react'
import Media from 'react-media'
import styled, { keyframes  } from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import PercentageCircle from 'src/components/PercentageCircle'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${ ({ isReverse }) => isReverse ? 'row-reverse' : 'row' };
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    @media only screen and (min-width: 75rem) {
        flex-direction: column;
    }
`

const Text = styled.label`
    margin: 7vw;
    font-size: 2.5vw;
    transform: translateZ(30px);
    font-weight: 200;
    @media only screen and (min-width: 75rem) {
        margin: 0px;
        margin-top: 30px;
        font-size: 2vw;
    }
`

export default ({ percent, name, isReverse }) => {
    return (
        <Media query={'(max-width: 45rem)'}>
            {
                matches => {
                    const fadeProps = {}
                    if (matches) {
                        fadeProps[ isReverse ? 'left' : 'right' ] = true
                    } else {
                        fadeProps[ isReverse ? 'top' : 'bottom' ] = true
                    }
                    return (
                        <Fade {...fadeProps}>
                            <Wrapper isReverse={isReverse} id={'parallax'}>
                                <PercentageCircle percent={percent} />
                                <Text>
                                    {name}
                                </Text>
                            </Wrapper>
                        </Fade>
                    )
                }
            }
        </Media>
        
    )
}