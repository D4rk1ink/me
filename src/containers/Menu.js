import React, { Component } from 'react'
import styled from 'styled-components'
import Media from 'react-media'
import MenuBar from 'src/components/Menu/MenuBar'
import MenuPopup from 'src/components/Menu/MenuPopup'
import MenuButton from 'components/Menu/MenuButton'
import * as data from 'src/constants/data'

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
        this.items = [
            data.menu.profile,
            data.menu.skills,
            data.menu.works,
            data.menu.contents,
            data.menu.activity,
        ]
        this.state = {
            isMenuShow: false
        }
    }

    scrollTo (id) {
        document.querySelector(`#${id}`).scrollIntoView({ 
            behavior: 'smooth' 
        })
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
                                    onClose: this.setIsMenuShow.bind(this),
                                    scrollTo: this.scrollTo
                                }
                                return (
                                    <div>
                                        <MenuButton isActive={ this.state.isMenuShow } handelButton={ this.setIsMenuShow.bind(this) } />
                                        <MenuPopup {...props}/>
                                    </div>
                                )
                            } else {
                                return <MenuBar items={this.items} scrollTo={this.scrollTo} />
                            }
                        }
                    }
                </Media>
            </Wrapper>
        )
    }
}

export default Menu