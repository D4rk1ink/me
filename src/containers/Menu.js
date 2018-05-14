import React, { Component } from 'react'
import styled from 'styled-components'
import Media from 'react-media'
import MenuBar from 'src/components/Menu/MenuBar'
import MenuPopup from 'src/components/Menu/MenuPopup'
import MenuButton from 'components/Menu/MenuButton'

const Wrapper = styled.div`
    @media only screen and (min-width: 75rem) {
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
                <Media query={'(min-width: 75rem)'}>
                    {
                        matches => {
                            if (!matches) {
                                const props = {
                                    items: this.items,
                                    isMobileSize: true,
                                    isShow: this.state.isMenuShow,
                                    onClose: this.setIsMenuShow.bind(this)
                                }
                                return (
                                    <div>
                                        <MenuButton isActive={ this.state.isMenuShow } handelButton={ this.setIsMenuShow.bind(this) } />
                                        <MenuPopup {...props}/>
                                    </div>
                                )
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