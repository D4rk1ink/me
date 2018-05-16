import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import color from 'src/constants/color'

const Wrapper = styled.div`
    padding: 5vw 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const ContentScroll = styled.div`
    overflow-y: scroll;
    transform: translateZ(30px);
`

const ContentItem = styled.div`
    text-align: center;
    font-size: 2.5rem;
    font-size: 2.5vw;
    padding: .8vw 0;
    cursor: pointer;
    &:hover {
        background: linear-gradient(to right, ${color.royal}, ${color.sky});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    @media only screen and (min-width: 45rem) {
        font-size: 2rem;
        font-size: 2vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 1.5rem;
        font-size: 1.5vw;
    }
`

export default ({ items }) => {
    return (
        <Wrapper id={'parallax'}>
            <ContentScroll>
                <Fade left cascade>
                    <div>
                        {
                            items.map((item, i) => {
                                return (
                                    <ContentItem key={i}><a href={item.link} target={`_blank`}>{ item.title['#cdata'] }</a></ContentItem>
                                )
                            })
                        }
                    </div>
                </Fade>
            </ContentScroll>
        </Wrapper>
    )
}