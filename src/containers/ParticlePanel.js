import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Particle from 'src/components/Particle'

const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
`

class Header extends Component {

    constructor (props) {
        super(props)
        this.size = Math.round(Math.random() * (150 - 100) + 100)
    }

    render () {
        return (
            <Wrapper id={'parallax'}>
                {
                    new Array(this.size).fill(null).map((item, i) => {
                        return <Particle key={i} />
                    })
                }
            </Wrapper>
        )
    }
}

export default Header