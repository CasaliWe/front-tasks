import styled from 'styled-components'

export const Teste = styled.h1`
    color: red;

    span{
        color: pink;
    }

    @media(max-width:992px){
        color: blue;

        span{
           color: orange;
        }
    }
`