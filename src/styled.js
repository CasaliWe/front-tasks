import {styled, createGlobalStyle }from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
  }
`


//------------------CONTAINER-----------------
export const ContainerContent = styled.div`
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
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #DFBD49;
        border-radius: 2px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #DFBD43;
      }

      @media(max-width:992px){
        width:100%;
        padding: 25px 15px;
      }
`
//------------------CONTAINER-----------------


