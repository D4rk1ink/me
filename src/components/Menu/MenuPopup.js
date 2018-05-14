import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'
import MenuItem from './MenuItem'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: ${ ({ visible }) => visible ? 'visible' : 'hidden' };
    font-size: 3.5vw;
    background-color: ${color.back}${ (props) => props.isShow ? `F0` : `00` };
    transition: background-color .5s;
    z-index: 98;
    > ${Fade} > * {
        margin: 10px 0 !important;
    }
    @media only screen and (min-width: 45rem) {
        font-size: 2.5vw;
    }
`

const MenuItemWrapper = styled.div`
`

class MenuPopup extends Component {

    constructor (props) {
        super(props)
        this.timeOut = null
        this.state = {
            visible: false
        }
    }

    render () {
        if (this.state.visible && !this.props.isShow) {
            this.timeOut = setTimeout(() => {
                this.setState({ visible: false })
            }, 1000)
        } else if (!this.state.visible && this.props.isShow) {
            if (this.timeOut) {
                clearTimeout(this.timeOut)
            }
            this.setState({ visible: true })
        }
        return (
            <Wrapper isShow={this.props.isShow} visible={this.state.visible}>
                {
                    this.props.items.map((item, i) => {
                        let props = {}
                        props[(i % 2 === 0) ? 'left' : 'right' ] = true
                        props['when'] = this.props.isShow
                        return (
                            <Fade { ...props } key={i}>
                                <MenuItemWrapper onClick={ () => this.props.onClose(false) }>
                                    <MenuItem title={item} />
                                </MenuItemWrapper>
                            </Fade>
                        )
                    })
                }
            </Wrapper>
        )
    }
}

export default MenuPopup