import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Circle = styled.div`
    width: 18vw;
    height: 18vw;
    border-radius: 50%;
    overflow: hidden;
    transform: translateZ(30px);
    @media only screen and (min-width: 45rem) {
        width: 15vw;
        height: 15vw;
    }
    @media only screen and (min-width: 75rem) {
        width: 10vw;
        height: 10vw;
    }
`

const Image = styled.img`
    height: 100%;
`

const TextGroup = styled.div`
    margin-top: 10px;
    transform: translateZ(50px);
    @media only screen and (min-width: 75rem) {
        margin: 0px;
        margin-top: 20px;
    }
`

const Name = styled.label`
    font-size: 3vw;
    @media only screen and (min-width: 45rem) {
        font-size: 2vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 1.5vw;
    }
`

const TechList = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    @media only screen and (min-width: 75rem) {
        margin-top: 20px;
    }
`

const Tech = styled.label`
    margin: 0 10px;
    font-size: 3vw;
    @media only screen and (min-width: 75rem) {
        font-size: 1.5vw;
    }
`

export default ({ item }) => {
    return (
        <Wrapper id={'parallax'}>
            <Circle>
                <Image src={item.img} />
            </Circle>
            <TextGroup>
                <Name>
                    {item.name}
                </Name>
                <TechList>
                    {
                        item.tech.split('|').map(tech => {
                            return <Tech className={`icon-${tech}`} />
                        })
                    }
                </TechList>
            </TextGroup>
        </Wrapper>
    )
}