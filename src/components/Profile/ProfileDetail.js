import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import * as data from 'src/constants/data'

const Wrapper = styled.div`
    flex: 1;
    text-align: center;
    padding: 0 5vw;
    @media only screen and (min-width: 45rem) {
        text-align: center;
        padding: 0 2vw;
    }
    @media only screen and (min-width: 75rem) {
        text-align: left;
        padding: 0 2vw;
    }
`

const FadeWrapper = styled.div`
    transform: translateZ(2vw);
`

const TopicWrapper = styled.div`
    margin: 10px 0;
    font-size: 3rem;
    font-size: 3vw;
    font-weight: 200;
    @media only screen and (min-width: 45rem) {
        font-size: 2rem;
        font-size: 2vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 1.5rem;
        font-size: 1.5vw;
    }
`

const Title = styled.label`
    color: ${ color.azure };
    padding-right: 2vw;
    font-weight: 300;
`

const Detail = styled.label`
    color: ${ color.azure };
`

export default () => {
    return (
        <Wrapper id={'parallax'}>
            <FadeWrapper>
                <Fade right cascade>
                    <div>
                        {
                            data.profile.map((detail, i) => {
                                return (
                                    <TopicWrapper key={i}>
                                        <Detail>
                                            { detail }
                                        </Detail>
                                    </TopicWrapper>
                                )
                            })
                        }
                    </div>
                </Fade>
            </FadeWrapper>
        </Wrapper>
    )
}