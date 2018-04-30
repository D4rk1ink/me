import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
    flex: 1;
`

const TopicWrapper = styled.div`
    margin: 10px 0;
    font-size: 4rem;
    font-size: 4vw;
    font-weight: 200;
    @media only screen and (min-width: 45rem) {
        font-size: 3rem;
        font-size: 3vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 2rem;
        font-size: 2vw;
    } 
`

const Title = styled.label`
    color: ${ color.darkBlue };
`

const Detail = styled.label`
    color: ${ color.darkBlue };
`

export default () => {
    return (
        <Wrapper>
            <Fade right cascade>
                <div>
                    <TopicWrapper>
                        <Title>
                            Name
                        </Title>
                        <Detail>
                            Passakorn Rattanaprapan
                        </Detail>
                    </TopicWrapper>
                    <TopicWrapper>
                        <Title>
                            Study
                        </Title>
                        <Detail>
                            Software Engineering
                        </Detail>
                    </TopicWrapper>
                    <TopicWrapper>
                        <Title>
                            Name
                        </Title>
                        <Detail>
                            Passakorn Rattanaprapan
                        </Detail>
                    </TopicWrapper>
                </div>
            </Fade>
        </Wrapper>
    )
}