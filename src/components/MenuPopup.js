import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import MenuItem from './MenuItem'

const Wrapper = styled.div`
    @media only screen and (max-width: 45rem) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${color.back}${ (props) => props.isShow ? `F0` : `00` };
        transition: background-color .5s;
        > ${Fade} > * {
            margin: 10px 0 !important;
        }
    }
`

const MenuItemWrapper = styled.div`
`

export default ({ items, isMobileSize, isShow, onClose }) => {
    return (
        <Wrapper isShow={isShow}>
            {
                items.map((item, i) => {
                    let props = {}
                    props[(i % 2 === 0) ? 'left' : 'right' ] = true
                    props['when'] = isShow
                    return (
                        <Fade { ...props } key={i}>
                            <MenuItemWrapper onClick={ () => onClose(false) }>
                                <MenuItem title={item} />
                            </MenuItemWrapper>
                        </Fade>
                    )
                })
            }
        </Wrapper>
    )
}