import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2vw;
    @media only screen and (min-width: 45rem) {
        height: 100vh !important;
    }
    @media only screen and (min-width: 75rem) {
        height: 100vh !important;
        
    }
`

export default Wrapper