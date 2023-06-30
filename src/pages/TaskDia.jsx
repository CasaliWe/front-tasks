//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate, useParams} from "react-router-dom"





const TaskDia = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext

  //REDIRECIONAR
  const navigate = useNavigate();

  //PEGAR PARÂMETROS
  const {idSemana, idDia} = useParams()


  useEffect(()=>{

    //VERIFICANDO SE O USER ESTÁ LOGADO 
    const verificarUser = verificarAutenticacao()
    if(verificarUser){
        //SALVAR O USER NA VAR E PEGA OS DADOS DELE
    }else{
        navigate(`/`)
    }

  }, [])


    
  return (
    <div>TaskDia {idSemana} + {idDia}</div>
  )
}

export default TaskDia