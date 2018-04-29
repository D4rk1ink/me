import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import MenuItem from './MenuItem'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > ${Fade} > :not(:first-child) {
        margin-left: 1vw;
    }
    > ${Fade} > :not(:last-child) {
        margin-right: 1vw;
    }
`

export default ({ items }) => {
    return (
        <Wrapper>
            {
                items.map((item, i) => {
                    let props = {}
                    props[(i % 2 === 0) ? 'top' : 'bottom' ] = true
                    return (
                        <Fade { ...props } key={i}>
                            <MenuItem title={item} />
                        </Fade>
                    )
                })
            }
        </Wrapper>
    )
}