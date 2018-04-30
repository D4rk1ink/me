import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import MainImageCircle from 'src/components/MainImageCircle'
import HeaderTextgroup from 'src/components/HeaderTextGroup'
import BigCircle from 'src/components/BigCircle'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vw;
    @media only screen and (min-width: 45rem) {
        height: 100vh;
    }
    @media only screen and (min-width: 75rem) {
        height: 100vh
    }
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