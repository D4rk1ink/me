import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import ProfileImage from 'src/components/ProfileImage'
import ProfileDetail from 'src/components/ProfileDetail'

const Wrapper = styled(StoryWrapper)`
    height: 120vw;
    background-color: ${color.azure};
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