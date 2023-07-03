//STYLED
import {styled }from 'styled-components'


//CONTAINER TASKS PESQUISA
export const ContainerTasksPesquisa = styled.div`
     margin-top: 20px;
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: start;
     align-items: center;
     height: 45vh;
     overflow-y: auto;
     color: white;
     padding-right: 4px;

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


     @media(min-width:1600px){
        height: 60vh;
     }

     @media(max-width:992px){
        height: 52vh;
     }

`
//CONTAINER TASKS PESQUISA



//CONTAINER TASK UNICA PESQUISA
export const ContainerTaskUnicaPesquisa = styled.div`
   border: 1px solid white;
   width: 100%;
   margin: 10px 0px;
   border-radius: 10px;
   padding: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   span{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      margin: 0px 3px;
      cursor: pointer;

      h6{
         color: #DFBD49;
         margin-bottom: 5px;
         font-size: 14px;
      }

      div{
         font-size: 16px;
      }
   }
`


export const ContentTaskSpanPesquisa = styled.span`
    display: block;
    width: 70%;
`
//CONTAINER TASK UNICA PESQUISA