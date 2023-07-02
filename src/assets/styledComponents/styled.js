import {styled, createGlobalStyle }from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
  }
`


//------------------CONTAINER-----------------
export const ContainerContent = styled.main`
      width: 100%;
      height: 100vh;
      background-color: black;
      display: flex;
      justify-content: center;
`

export const MainContent = styled.div`
      background-color: black;
      width:35%;
      height:100%;
      padding: 35px 25px;
      overflow-y: hidden;

      @media(max-width:992px){
        width:100%;
        padding: 25px 15px;
      }
`
//------------------CONTAINER-----------------




