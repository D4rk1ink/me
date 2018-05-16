import React, { Component } from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import * as data from 'src/constants/data'

const Wrapper = styled.div`
    position: relative;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 0 10vw;
`

const Line = styled.div`
    position: absolute;
    top: 0;
    width: 80vw;
    height: 1px;
    background: linear-gradient(to right, ${color.royal}, ${color.sky});
`

const PowerBy = styled.div`
    flex: 1;
    font-size: 3vw;
    @media only screen and (min-width: 45rem) {
        font-size: 1.2vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: .8vw;
    }
`

const Social = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 4vw;
    @media only screen and (min-width: 45rem) {
        font-size: 1.5vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 1vw;
    }
`

const SocialIcon = styled.i`
    margin: 0 5px;
`

class Footer extends Component {

    render () {
        return (
            <Wrapper>
                <Line />
                <PowerBy>
                    { data.footer.powerBy }
                </PowerBy>
                <Social>
                    {
                        data.footer.social.map((social, i) => {
                            return (
                                <a href={social.link} target={'_blank'}>
                                    <SocialIcon className={`fa fa-${social.name}`} key={i}/>
                                </a>
                            )
                        })
                    }
                </Social>
            </Wrapper>
        )
    }
}

export default Footer