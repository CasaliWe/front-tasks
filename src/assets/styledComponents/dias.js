//STYLED
import {styled }from 'styled-components'



export const ContainerDias = styled.div`
      position: relative;
`



//------------------HEADER-----------------
export const HeaderStyled = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      margin-bottom: 30px;

      button{
        background-color: transparent;
        border: none;
        color: white;
        align-self: start;
        font-size: 18px;
        cursor: pointer;
        transition: 500ms;

        &:hover{
             color: gray;
        }
      }

      div{
         display: flex;
         flex-direction: column;
         align-items: end;
         height: 100%;

         img{
            width: 65px;
            height: 65px;
            border-radius: 50%;
            margin-bottom: 12px;
         }

         span{
              font-size: 16px;
         }
      }
`


export const HeaderStyledBtns = styled.div`
       
       button{
         margin-bottom: 50%;
       }

       a{
          background-color: #DFBD43;
          color: white;
          font-weight: 500;
          padding: 3px 15px;
          border-radius: 5px;
          border: none;
          text-decoration: none;
          transition: 500ms;

          &:hover{
             background-color: #DFBD83;
          }
       }
`
//------------------HEADER-----------------



//------------------DIAS-------------------
export const StyledDias = styled.div`
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        color: white;
`

//Dia único
export const ContainerDiaUnico = styled.div`
       cursor: pointer;

       a{
          text-decoration: none;
          color: white;
       }
   
       div{
          text-align: center;

          @media(max-width:992px){
              font-size: 12px;
          }
       }
`

export const ContainerNumeroDia = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 50%;
    background-color: #dfbd8389;
    
    @media(max-width:992px){
        height: 22px;
        width: 22px;
        font-size: 12px;
        margin-bottom: 10px;
    }
`
//Dia único


//Dia selecionado
export const ContainerNumeroDiaSelecionado = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    margin-top: -5px;
    border-radius: 50%;
    background-color: #DFBD43;
    
    @media(max-width:992px){
        height: 30px;
        width: 30px;
        font-size: 12px;
        margin-bottom: 10px;
    }
`
//Dia selecionado


//aviso
export const ContainerAvisoDias = styled.div`
   border: 1px solid white;
   padding: 15px 20px;
   margin-top: 60px;
   border-radius: 10px;
   color: white;
   text-align: center;
   font-size: 14px;
`
//aviso

//------------------DIAS-------------------