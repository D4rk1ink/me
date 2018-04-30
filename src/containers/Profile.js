import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import ProfileImage from 'src/components/ProfileImage'
import ProfileDetail from 'src/components/ProfileDetail'
import CloudTwoSVG from 'src/images/cloud-2.svg'

const Wrapper = styled(StoryWrapper)`
    background-color: ${color.azure};
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

const CloudBackground = styled.div`
    position: absolute;
    width: 60vw;
    bottom: -7vw;
    right: -3vw;
`

const CloudImage = styled.img`
    width: 100%;
    filter: invert(0.22) sepia(1) saturate(1) hue-rotate(140deg);
`

class Profile extends Component {
    render () {
        return (
            <Wrapper>
                <CloudBackground>
                    <Fade bottom>
                        <CloudImage src={CloudTwoSVG} />
                    </Fade>
                </CloudBackground>
                <Title title={'Profile'} dark />
                <Content>
                    <ProfileImage />
                    <ProfileDetail />
                </Content>
            </Wrapper>
        )
    }
}

export default Profile