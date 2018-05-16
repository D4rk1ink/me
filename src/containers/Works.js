import React, { Component } from 'react'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import WorkSlide from 'src/components/Works/WorkSlide'
import AnonymockPNG from 'src/images/anonymock.png'
import YwcPNG from 'src/images/ywc.png'
import CropTopPNG from 'src/images/croptop.png'
import ShoesShopPNG from 'src/images/shoesshop.png'
import ParallaxScroll from 'src/components/ParallaxScroll'
import ImageSVG from 'src/images/stars.svg'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

const WorkWrapper = styled.div`
`

class Header extends Component {

    constructor (props) {
        super(props)
        this.state = {
            items: [
                {
                    name: 'Anonymock',
                    des: '',
                    img: AnonymockPNG,
                    repo: '',
                    tech: 'angular|nodejs|mongodb'
                },
                {
                    name: 'YWC15 Announcement',
                    des: '',
                    img: YwcPNG,
                    repo: '',
                    tech: 'angular|m-firebase'
                },
                {
                    name: 'Crop Tops',
                    des: '',
                    img: CropTopPNG,
                    repo: '',
                    tech: 'm-electron|react'
                },
                {
                    name: 'Shoes E-commerce',
                    des: '',
                    img: ShoesShopPNG,
                    repo: '',
                    tech: 'java|mysql'
                }
            ]
        }
    }

    render () {
        return (
            <Wrapper>
                <ParallaxScroll src={ImageSVG} x={70} y={20} />
                <Title title={'Works'} light />
                <WorkSlide items={this.state.items} />
            </Wrapper>
        )
    }
}

export default Header