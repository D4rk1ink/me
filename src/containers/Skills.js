import React, { Component } from 'react'
import styled from 'styled-components'
import StoryWrapper from 'src/components/StoryWrapper'
import Title from 'src/components/Title'
import PercentageGroup from 'src/components/PercentageGroup'

const Wrapper = styled(StoryWrapper)`
    overflow: hidden;
`

const SkillItem = styled.div`
    position: relative;
    display: flex;
    margin: 5vw 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media only screen and (min-width: 75rem) {
        flex: 1;
        margin: 0;
    }
`

const SkillsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 75rem) {
        flex-direction: row;
        padding: 5vw;        
    }
`

class Profile extends Component {

    constructor (props) {
        super(props)
        this.skills = [
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
        ]
    }

    render () {
        const SkillList = this.skills.map((skill, i) => 
            (
                <SkillItem key={i}>
                    <PercentageGroup {...skill} isReverse={i % 2 === 0} />
                </SkillItem>
            )
        )
        return (
            <Wrapper>
                <Title title={'Programming Skills'} light />
                <SkillsWrapper>
                    {
                        SkillList       
                    }
                </SkillsWrapper>
            </Wrapper>
        )
    }
}

export default Profile