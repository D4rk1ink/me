import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import ActivityItem from 'src/components/Activity/ActivityItem'
import ParallaxScroll from 'src/components/ParallaxScroll'
import ImageSVG from 'src/images/astronaut_2.svg'
import * as data from 'src/constants/data'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

const ActivityWrapper = styled.div`
    flex: unset;
    width: 30vw;
    padding-bottom: 5vw;
    transform: translateZ(3vw);
    @media only screen and (min-width: 45rem) {
        flex: 1;
        width: auto;
        padding-bottom: 0;
    }
`

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (min-width: 45rem) {
        flex-wrap: nowrap;
    }
`

class Profile extends Component {
    render () {
        return (
            <Wrapper>
                <ParallaxScroll src={ImageSVG} x={5} y={20} />
                <Title title={'Activity'} light />
                <Content id={'parallax'}>
                    {
                        data.activity.map((item, i) => {
                            const fade = (i % 2 === 0) ? { top: true } : { bottom: true }
                            return (
                                <ActivityWrapper key={i}>
                                    <Fade {...fade}>
                                        <ActivityItem item={item} />
                                    </Fade>
                                </ActivityWrapper>
                            )
                        })
                    }
                </Content>
            </Wrapper>
        )
    }
}

export default Profile