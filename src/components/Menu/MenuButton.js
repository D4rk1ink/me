import React from 'react'
import styled from 'styled-components'

const MenuButton = styled.div`
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 99;
    font-size: 3.5vw;
    cursor: pointer;
    @media only screen and (min-width: 45rem) {
        font-size: 2.5vw;
    }
    @media only screen and (min-width: 75rem) {
        display: none;
    }
`

export default ({ isActive, handelButton }) => {
    return (
        <MenuButton onClick={ () => handelButton(!isActive) }>
            MENU
        </MenuButton>
    )
}