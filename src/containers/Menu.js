import React, { Component } from 'react'
import styled from 'styled-components'
import Media from 'react-media'
import MenuBar from 'src/components/MenuBar'
import MenuPopup from 'src/components/MenuPopup'
import MenuButton from 'components/MenuButton'

const Wrapper = styled.div`
    @media only screen and (min-width: 45rem) {
        position: absolute;
        bottom: 50px;
        width: 100%;
    }
`

class Menu extends Component {

    constructor (props) {
        super(props)
        this.items = ['PROFILE', 'SKILLS', 'WORKS', 'BLOGS', 'ACTIVITY']
        this.state = {
            isMenuShow: false
        }
    }

    setIsMenuShow (value) {
        this.setState({ isMenuShow: value })
    }

    render () {
        return (
            <Wrapper>
                <MenuButton isActive={ this.state.isMenuShow } handelButton={ this.setIsMenuShow.bind(this) } />
                <Media query={'(max-width: 45rem)'}>
                    {
                        matches => {
                            if (matches) {
                                const props = {
                                    items: this.items,
                                    isMobileSize: true,
                                    isShow: this.state.isMenuShow,
                                    onClose: this.setIsMenuShow.bind(this)
                                }
                                return <MenuPopup {...props}/>
                            } else {
                                return <MenuBar items={this.items} />
                            }
                        }
                    }
                </Media>
            </Wrapper>
        )
    }
}

export default Menu