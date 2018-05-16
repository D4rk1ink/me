import React, { Component } from 'react'
import axios  from 'axios'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import ContentList from 'src/components/Contents/ContentList'
import ParallaxScroll from 'src/components/ParallaxScroll'
import ImageSVG from 'src/images/space.svg'
import xml2json from 'src/utils/xml2json'
import * as data from 'src/constants/data'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

class Contents extends Component {

    constructor (props) {
        super(props)
        this.state = { contents: [] }
        this.getMyContent()
    }

    getMyContent () {
        const url = 'https://medium.com/feed/@passakornworking?format=json'
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.get(url, config)
            .then(res => {
                
            })
            .catch(err => {
                const xml = new DOMParser().parseFromString(data.contents.mockMediumAPI, 'text/xml')
                const res = JSON.parse(xml2json(xml))
                const items = res.rss.channel.item
                this.setState({ contents: items })
            })
    }

    render () {
        return (
            <Wrapper>
                <ParallaxScroll src={ImageSVG} x={70} y={50} />
                <Title title={'Contents'} light />
                <ContentList items={this.state.contents} />
            </Wrapper>
        )
    }
}

export default Contents