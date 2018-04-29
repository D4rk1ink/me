import React, { Component } from 'react'
import styled from 'styled-components'
import ImageProfileCircle from 'src/components/ImageProfileCircle'
import HeaderTextgroup from 'src/components/HeaderTextGroup'
import BigCircle from 'src/components/BigCircle'
import MenuBar from 'src/components/MenuBar'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 8vw;
    padding-top: 1vw;
`

class App extends Component {
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

export default App