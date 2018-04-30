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
        this.size = Math.round(Math.random() * (150 - 100) + 100)
    }

    componentDidMount () {
        const ParallaxElements = document.querySelectorAll('#parallax')
        const mousemove = document.addEventListener('mousemove', (event) => {
            const x = event.x
            const y = event.y
            const windowWidth = event.view.innerWidth
            const windowHeight = event.view.innerHeight
            const rotateX = (y - windowWidth / 2) / windowWidth * 10
            const rotateY = (x - windowHeight / 2) / windowHeight * -5
            ParallaxElements.forEach(el => {
                el.style = `transform: rotateX(${ rotateX }deg) rotateY(${ rotateY }deg); transform-style: preserve-3d;`
            })
        })
    }

    componentWillUnmount () {
        document.removeEventListener('mousemove')
    }

    render () {
        return (
            <div></div>
        )
    }
}

export default Parallax