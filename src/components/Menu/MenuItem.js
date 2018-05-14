import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
`

const Label = styled.label`
    cursor: pointer;
`

const LineWrapper = styled.div`
`

const Line = styled.div`
    margin: 2px 0;
    height: 1px;
    background-color: ${color.light};
`

export default class MenuItem extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isHover: false
        }
    }

    setIsHover (value) {
        this.setState({ isHover: value })
    }

    render () {
        return (
            <Wrapper onMouseEnter={ () => this.setIsHover(true) } onMouseLeave={ () => this.setIsHover(false) }>
                <Label>{ this.props.title }</Label>
                <LineWrapper>
                    <Fade left when={ this.state.isHover }>
                        <Line />
                    </Fade>
                    <Fade right when={ this.state.isHover }>
                        <Line />
                    </Fade>
                </LineWrapper>
            </Wrapper>
        )
    }
}