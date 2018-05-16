import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'

const MenuButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    width: 4vw;
    height: 4vw;
    top: 20px;
    right: 20px;
    z-index: 99;
    font-size: 3.5vw;
    overflow: hidden;
    cursor: pointer;
    @media only screen and (min-width: 45rem) {
        font-size: 2.5vw;
    }
    @media only screen and (min-width: 75rem) {
        display: none;
    }
`

const Line = styled.div`
    position: absolute;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, ${color.royal}, ${color.sky});
`

const TopLine = styled(Line)`
    top: 0;
`

const CenterLine = styled(Line)`
    width: 50%;
    top: 2vw;
`

const BottomLine = styled(Line)`
    bottom: 0;
`

export default ({ isActive, handelButton }) => {
    return (
        <MenuButton onClick={ () => handelButton(!isActive) }>
            <TopLine />
            <CenterLine />
            <BottomLine />
        </MenuButton>
    )
}