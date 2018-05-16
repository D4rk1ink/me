import React, { Component } from 'react'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import WorkSlide from 'src/components/Works/WorkSlide'
import ParallaxScroll from 'src/components/ParallaxScroll'
import ImageSVG from 'src/images/stars.svg'
import * as data from 'src/constants/data'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

class Works extends Component {

    render () {
        return (
            <Wrapper>
                <ParallaxScroll src={ImageSVG} x={70} y={20} />
                <Title title={'Works'} light />
                <WorkSlide items={data.works} />
            </Wrapper>
        )
    }
}

export default Works