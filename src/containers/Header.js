import React, { Component } from 'react'
import styled from 'styled-components'
import ImageProfileCircle from 'src/components/ImageProfileCircle'
import HeaderTextgroup from 'src/components/HeaderTextGroup'
import BigCircle from 'src/components/BigCircle'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 8vw;
    padding-top: 1vw;
`

class Header extends Component {
    render () {
        return (
            <Wrapper>
                <BigCircle />
                <ImageProfileCircle />
                <HeaderTextgroup />
            </Wrapper>
        )
    }
}

export default Header