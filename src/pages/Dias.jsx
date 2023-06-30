//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../assets/styledComponents/styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate, useParams} from "react-router-dom"




const Dias = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext

  //REDIRECIONAR
  const navigate = useNavigate();

  //PEGAR PARÂMETROS
  const {idSemana} = useParams()


  useEffect(()=>{

    const verificarUser = async () => {
        try {
          const user = await verificarAutenticacao();
          if (user) {
            setUser(user.uid)
            //PEGAR OS DADOS COM O UID
          }else{
            navigate(`/`)
          }
        } catch (error) {
            navigate(`/`)
        }
    };
  
    verificarUser();

  }, [])



  return (
    <div>Dias {idSemana}</div>
  )
}

export default Dias