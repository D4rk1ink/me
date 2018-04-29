import React from 'react'
import styled from 'styled-components'

const MenuButton = styled.div`
    display: none;
    @media only screen and (max-width: 45rem) {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
        cursor: pointer;
    }
`

export default ({ isActive, handelButton }) => {
    return (
        <MenuButton onClick={ () => handelButton(!isActive) }>
            MENU
        </MenuButton>
    )
}