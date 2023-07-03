//STYLED
import {styled }from 'styled-components'



export const ContainerAdicionarTask = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding-left: 5px;
     padding-right: 5px;

     span{
        color: white;
        font-weight: 500;
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



//MODAL
export const ContainerModalTask = styled.div`
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.897);
    height: 90vh;
    top: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`



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


export const ContainerFormTask = styled.div`
     border: 1px solid white;
     width: 90%;
     padding: 15px;
     border-radius: 10px;

     form{
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         width: 100%;

         input, select{
             background-color: transparent;
             border: none;
             border-bottom: 2px solid #DFBD43;
             padding: 6px 10px;
             margin-bottom: 15px;
             width: 80%;
             color: white;

             &::placeholder{
                 color: gray;
             }

             option{
                 color: black;
                 padding: 10px;
             }
         }

         button{
            background-color: #DFBD43;
            color: white;
            font-weight: 500;
            padding: 6px 35px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            transition: 500ms;
            margin-top: 20px;

            &:hover{
                background-color: #DFBD83;
            }
         }
     }
`


export const BtnFecharModal = styled.button`
     background-color: transparent;
     border: none;
     color: white;
     margin-top: 50px;
     cursor: pointer;
     transition: 500ms;

     &:hover{
         color: gray;
     }
`
//MODAL




//CONTAINER MOSTRAR TASKS
export const ContainerMostarTasks = styled.div`
   margin-top: 20px;
   height: 35vh;
   overflow-y: auto;
   color: white;
   padding-right: 5px;

   
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
       height: 55vh;
   }

   @media(max-width:992px){
       height: 45vh;
   }
`

//TASK ÚNICA
export const ContainerTaskUnica = styled.div`
   border: 1px solid white;
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


export const ContentTaskSpan = styled.span`
    display: block;
    width: 70%;
`

export const ContainerDiaSemTask = styled.div`
   margin-top: 50px;
   border: 1px solid white;
   width: 100%;
   border-radius: 10px;
   text-align: center;
   padding: 12px;
   font-size: 12px;
`


//CONTAINER MOSTRAR TASKS