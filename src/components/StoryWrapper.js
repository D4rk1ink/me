import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2vw;
    padding: 0 15vw;
    @media only screen and (min-width: 45rem) {
        padding: 0 10vw;
    }
    @media only screen and (min-width: 75rem) {
        height: 100vh !important;
    }
`

export default Wrapper