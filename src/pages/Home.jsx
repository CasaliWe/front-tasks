//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"




const Home = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext
  
  //REDIRECIONAR
  const navigate = useNavigate();



  useEffect(()=>{

      //VERIFICANDO SE O USER ESTÁ LOGADO 
      const verificarUser = verificarAutenticacao()
      if(verificarUser){
          //SALVAR O USER NA VAR E BUSCAR OS DADOS DELE
      }else{
          navigate(`/`)
      }
      
  }, [])



  return (
    <div>Home {user}</div>
  )
}

export default Home

