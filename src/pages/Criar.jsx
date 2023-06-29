//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"




const Criar = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext

  //REDIRECIONAR
  const navigate = useNavigate();


  useEffect(()=>{

    //VERIFICANDO SE O USER ESTÁ LOGADO 
    const verificarUser = verificarAutenticacao()
    if(verificarUser){
        //SALVAR O USER NA VAR E LEVA PARA HOME
        navigate(`/home`)
    }

  }, [])


  return (
    <div>Criar {user}</div>
  )
}

export default Criar