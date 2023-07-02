import {styled }from 'styled-components'



export const ContainerHome = styled.div`
      height: 100%;
      overflow-y: hidden;
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
//------------------HEADER-----------------





//------------------PESQUISA-----------------
export const PesquisaStyled = styled.div`
      border-radius: 20px;
      background-color: white;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;

      form{
         width: 100%;
         height: 100%;

         input{
            width: 100%;
            height: 100%;
            padding: 10px 15px;
         }

         button{
             position: absolute;
             right: 14px;
             top: 8px;
             cursor: pointer;
             background-color: transparent;
             border: none;

             img{
                 width: 18px;
             }
         }
      }


      @media(max-width:992px){
        form{
            button{
               right: 14px;
               top: 6px;
            }
        }
      }
`  
//------------------PESQUISA-----------------





//------------------ADICIONAR-----------------
export const AdicionarStyled = styled.div`
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 4px;
      position: relative;

      span{
        font-weight: bold;
        font-size: 18px;
      }

      button{
         background-color: #DFBD43;
         border: none;
         border-radius: 10px;
         padding: 5px 15px;
         color: white;
         cursor: pointer;
         transition: 500ms;

         &:hover{
            background-color: #DFBD63;
         }
      }
`


//CONTAINER MODAL
export const ContainerModal = styled.div`
         position: absolute;
         z-index: 100;
         left: 0;
         right: 0;
         width: 100%;
         height: 120vh;
         display: flex;
         justify-content: center;
         flex-direction: column;
         align-items: center;
         background-color:rgba(0, 0, 0, 0.947);
         color: white;
         padding-top: 180px;

         @media(min-width:1800px){
            padding-top: 280px;
         }
`



//MODAL
export const HeaderModal = styled.div`
     margin-bottom: 25px;
     display: flex;
     align-items: center;
     justify-content: center;

     span{
         color: #DFBD43;
         font-weight: bold;
         font-size: 18px;
         margin-right: 8px;
     }
     
     img{
        width: 50px;
     }
`


export const ContainerFormModal = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
`


export const FormModal = styled.div`
    border: 1px solid white;
    padding: 10px;
    width: 75%;
    border-radius: 10px;
    text-align: center;

    h6{
         margin-bottom: 15px;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 15px;

        input{
            width: 95%;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid #DFBD43;
            padding: 5px 8px;
            color: white;
            margin-bottom: 20px;
        }

        button{
            background-color: #DFBD43;
            border: none;
            color: white;
            padding: 6px 20px;
            margin-bottom: 10px;
        }
    }
`




export const ResFormModal1 = styled.div`
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      p{
        width: 60%;
        margin: 10px auto;
        text-align: center;

        span{
            color: #DFBD43;
        }
      }

      button{
          margin: 10px 0px;
          width: 50%;
      }
`


export const ResFormModal2 = styled.div`
      margin-top: 20px;

      p{
        width: 60%;
        text-align: center;
        margin: 10px auto;
      }

      h6{
         margin-bottom: 5px;
         color: #DFBD43;
         text-align: center;
         font-size: 16px;
      }
`




export const BtnFecharModal = styled.div`
    margin-top: 40px;

    button{
         background-color: transparent;
         border: none;
         color: white;
         cursor: pointer;
         transition: 500ms;

         &:hover{
            background-color: transparent;
            color: gray;
         }
    }
`
//MODAL
//------------------ADICIONAR-----------------






//------------------SEMANAS-----------------
export const SemanasStyled = styled.div`
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 60%;
        overflow-y: auto;
        padding-bottom: 15px;
        padding: 5px;

        @media (min-width:1000px) and (max-width:1380px){
             height: 300px;
             padding-bottom: 40px;
        }



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


        p{
            color: white;
            width: 65%;
            text-align: center;
            margin-top: 50px;
        }
`



//SEMANA UNICA CONTAINER
export const ContainerSemanaUnica = styled.div`
     width: 100%;
     border: 1px solid white;
     border-radius: 15px;
     margin-top: 20px;
     color: white;
     padding: 10px 15px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     cursor: pointer;
     transition: 500ms;

     &:hover{
        background-color: rgba(255, 255, 255, 0.121);
     }

     div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 85%;

        h6{
             margin-bottom: 5px;
             width: 100%;
             font-size: 15px;

             span{
                color: #DFBD43;
             }
        }
     }


     button{
         background-color: transparent;
         border: none;
         color: #DFBD43;
         cursor: pointer;
         transition: 500ms;

         &:hover{
            color: red;
         }
     }
`
//------------------SEMANAS-----------------