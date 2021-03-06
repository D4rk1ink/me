import React, { Component } from 'react'

class Parallax extends Component {

    constructor (props) {
        super(props)
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    componentDidMount () {
        document.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount () {
        document.removeEventListener('mousemove', this.handleMouseMove, true)
    }

    handleMouseMove (event) {
        const parallaxElements = document.querySelectorAll('#parallax')
        const x = event.x
        const y = event.y
        const windowWidth = event.view.innerWidth
        const windowHeight = event.view.innerHeight
        const rotateX = (y - windowHeight / 2) / windowHeight * -7
        const rotateY = (x - windowWidth / 2) / windowWidth * 7
        parallaxElements.forEach(el => {
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