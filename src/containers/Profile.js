import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Title from 'src/components/Title'
import ProfileImage from 'src/components/ProfileImage'
import ProfileDetail from 'src/components/ProfileDetail'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 120vw;
    margin-bottom: 8vw;
    padding-top: 1vw;
    background-color: ${color.azure};
    @media only screen and (min-width: 45rem) {
        height: 100vw;
    }
    @media only screen and (min-width: 75rem) {
        height: 100vh;
    }
`

const Content = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 8vw;
    padding-top: 1vw;
    @media only screen and (min-width: 45rem) {
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