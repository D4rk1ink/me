import React, { Component } from 'react'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import SkillSlide from 'src/components/Skills/SkillSlide'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

class Profile extends Component {

    constructor (props) {
        super(props)
        this.state = {
            skills: [
                {
                    name: 'REACT',
                    percent: 50
                },
                {
                    name: 'ANGULAR',
                    percent: 60
                },
                {
                    name: 'EXPRESS',
                    percent: 40
                },
                {
                    name: 'BOOTSTRAP',
                    percent: 70
                },
                {
                    name: 'PYTHON',
                    percent: 30
                },
            ]
        }
    }

    render () {
        return (
            <Wrapper>
                <Title title={'Programming Skills'} light />
                <SkillSlide items={this.state.skills} />
            </Wrapper>
        )
    }
}

export default Profile