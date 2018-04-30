import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
    flex: 1;
    text-align: center;
    padding: 0 5vw;
    @media only screen and (min-width: 45rem) {
        text-align: left;
        padding: 0 2vw;
    }
`

const TopicWrapper = styled.div`
    margin: 10px 0;
    font-size: 3rem;
    font-size: 3vw;
    font-weight: 200;
    @media only screen and (min-width: 45rem) {
        font-size: 1.5rem;
        font-size: 1.5vw;
    }
`

const Title = styled.label`
    color: ${ color.darkBlue };
    padding-right: 2vw;
    font-weight: 300;
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
                            Date of Birth
                        </Title>
                        <Detail>
                            1 November 1995
                        </Detail>
                    </TopicWrapper>
                    <TopicWrapper>
                        <Title>
                            Email
                        </Title>
                        <Detail>
                            passakornworking@gmail.com
                        </Detail>
                    </TopicWrapper>
                    <TopicWrapper>
                        <Title>
                            Education
                        </Title>
                        <Detail>
                            Software Engineering, Prince of Songkla University
                        </Detail>
                    </TopicWrapper>
                </div>
            </Fade>
        </Wrapper>
    )
}