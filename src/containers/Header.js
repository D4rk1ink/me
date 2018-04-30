import React, { Component } from 'react'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import MainImageCircle from 'src/components/MainImageCircle'
import HeaderTextgroup from 'src/components/HeaderTextGroup'
import BigCircle from 'src/components/BigCircle'

const Wrapper = styled(StoryWrapper)`
    height: 60vw;
`

class Header extends Component {
    render () {
        return (
            <Wrapper id={'parallax'}>
                <BigCircle />
                <MainImageCircle />
                <HeaderTextgroup />
            </Wrapper>
        )
    }
}

export default Header