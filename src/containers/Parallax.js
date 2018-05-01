import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Particle from 'src/components/Particle'

const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    perspective: 4000px;
    transform-style: preserve-3d;
`

class Parallax extends Component {

    constructor (props) {
        super(props)
        this.parallaxElements = null
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    componentDidMount () {
        this.parallaxElements = document.querySelectorAll('#parallax')
        document.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount () {
        document.removeEventListener('mousemove', this.handleMouseMove, true)
    }

    handleMouseMove (event) {
        const x = event.x
        const y = event.y
        const windowWidth = event.view.innerWidth
        const windowHeight = event.view.innerHeight
        const rotateX = (y - windowHeight / 2) / windowHeight * -7
        const rotateY = (x - windowWidth / 2) / windowWidth * 7
        this.parallaxElements.forEach(el => {
            el.style = `transform: rotateX(${ rotateX }deg) rotateY(${ rotateY }deg); transform-style: preserve-3d;`
        })
    }

    render () {
        return (
            <div></div>
        )
    }
}

export default Parallax