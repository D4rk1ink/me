import React, { Component } from 'react'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import ProfileImage from 'src/components/Profile/ProfileImage'
import ProfileDetail from 'src/components/Profile/ProfileDetail'
import ParallaxScroll from 'src/components/ParallaxScroll'
import ImageSVG from 'src/images/astronaut.svg'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 75rem) {
        flex-direction: row;
    }
`

class Profile extends Component {
    render () {
        return (
            <Wrapper>
                <ParallaxScroll src={ImageSVG} x={75} y={40} />
                <Title title={'Profile'} light />
                <Content>
                    <ProfileImage />
                    <ProfileDetail />
                </Content>
            </Wrapper>
        )
    }
}

export default Profile