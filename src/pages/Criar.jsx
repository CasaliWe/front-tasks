//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../assets/styledComponents/styled'

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

      const verificarUser = async () => {
        try {
          const user = await verificarAutenticacao();
          if (user) {
            navigate(`/home`)
          }
        } catch (error) {
            navigate(`/`)
        }
    };

    verificarUser();

  }, [])


  return (
    <div>Criar {user}</div>
  )
}

export default Criar