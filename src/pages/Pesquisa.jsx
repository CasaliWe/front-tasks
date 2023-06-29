//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"



const Pesquisa = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext
  
  //REDIRECIONAR
  const navigate = useNavigate();



  useEffect(()=>{

      //VERIFICANDO SE O USER ESTÁ LOGADO 
      const verificarUser = verificarAutenticacao()
      if(verificarUser){
          //SALVAR O USER NA VAR BUSCA OS DADOS DA PESQUISA PARA MOSTRAR
      }else{
          navigate(`/`)
      }
      
  }, [])



  return (
    <div>Pesquisa {user}</div>
  )
}

export default Pesquisa