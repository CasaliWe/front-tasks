import {styled, createGlobalStyle }from 'styled-components'



//------------------LOGIN-----------------
export const ContainerLogin = styled.div`
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`


export const TitleImgLogin = styled.div`
     display: flex;
     justify-content: space-around;
     margin-bottom: 20px;
     color: #DFBD43 !important;

     span{
        align-self: center;
        font-weight: bold;
        font-size: 20px;
     }

     img{
        width: 60px;
     }
`


export const FormLoginContainer = styled.div`
     padding: 20px 10px;
     border: 1px solid white;
     border-radius: 5px;
     width: 75%;

     form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     }

     input{
        margin-bottom: 25px;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #DFBD43;
        padding: 5px 8px;
        color: white;
        width: 90%;
     }

     button{
        color: white;
        background-color: #DFBD43;
        padding: 6px 35px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: 500ms;

        &:hover {
          background-color: #dfbd43c6;
        }
     }


     p{
        margin-top: 10px;
        color: red;
     }



     @media(max-width:992px){
          width:90%;

          input{
            margin-bottom: 30px;
            padding: 8px 10px;
          }

          button{
            padding: 10px 50px;
         }
     }
`



export const SemContaContainer = styled.div`
     color: white;
     margin-top: 15px;

     span{
        margin-right: 10px;
     }

     a{
        background-color: #DFBD43;
        border: none;
        color:white;
        text-decoration: none;
        padding: 4px 12px;
        border-radius: 5px;
        transition: 500ms;

        &:hover{
           background-color: #dfbd43c6;
        }
     }


     @media(max-width:992px){
        margin-top: 25px;
     }
`



export const EntrarGoogleContainer = styled.div`
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;

      button{
          margin-top: 15px;
          border: none;
          border-radius: 5px;
          padding: 5px 25px;
          display: flex;
          font-size: 14px;
          cursor: pointer;
          transition: 500ms;

          &:hover{
             background-color: white;
          }

          span{
            align-self: center;
            margin-left: 10px;
          }
      }
`

export const LogoGoogle = styled.img`
      width: 22px;
`
//------------------LOGIN-----------------


