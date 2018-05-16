import React, { Component } from 'react'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import SkillSlide from 'src/components/Skills/SkillSlide'
import ParallaxScroll from 'src/components/ParallaxScroll'
import ImageSVG from 'src/images/moon.svg'
import * as data from 'src/constants/data'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

class Skills extends Component {

    render () {
        return (
            <Wrapper>
                <ParallaxScroll src={ImageSVG} x={20} y={70} />
                <Title title={'Programming Skills'} light />
                <SkillSlide items={data.skills} />
            </Wrapper>
        )
    }
}

export default Skills