import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick'
import SkillItem from './SkillItem'

const Wrapper = styled.div`
    padding: 5vw 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transform: translateZ(30px);
`

const SliderWrapper = styled.div`
`

export default ({ items }) => {
    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
                breakpoint: 12000,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
            }
        ]
    }
    return (
        <Wrapper>
            <SliderWrapper>
                <Slider {...sliderSetting} >
                    {
                        items.map((item, i) => {
                            const fade = (i % 2 === 0) ? { top: true } : { bottom: true }
                            return (
                                <Fade {...fade}>
                                    <SkillItem item={item} key={i}></SkillItem>
                                </Fade>
                            )
                        })
                    }
                </Slider>
            </SliderWrapper>
        </Wrapper>
    )
}