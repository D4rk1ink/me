import React, { Component } from 'react'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import HeaderTextgroup from 'src/components/Header/HeaderTextGroup'
import ParallaxScroll from 'src/components/ParallaxScroll'
import ImageSVG from 'src/images/rocket.svg'

const Wrapper = styled(StoryWrapper)`
    height: 60vw;
`

class Header extends Component {
    render () {
        return (
            <Wrapper id={'parallax'}>
                <ParallaxScroll src={ImageSVG} x={70} y={25} />
                <HeaderTextgroup />
            </Wrapper>
        )
    }
}

export default Header