//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"


//STYLED COMPONENTS
import {  } from '../styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';


const Home = () => {
  //CONTEXT USER
  const nome = useContext(AppContext)


  useEffect(()=>{

      //PEGANDO A VERIFICAÇÃO DE LOGIN
      verificarAutenticacao();
      
  }, [])



  return (
    <div>Home {nome}</div>
  )
}

export default Home

