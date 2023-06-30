//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import { ContainerCriar } from '../assets/styledComponents/authStyles'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"

//COMPONENTS
import { TitleIcon } from '../components/login/TitleIcon'
import { FormCriar } from '../components/criar/FormCriar'
import { FazerLogin } from '../components/criar/FazerLogin'


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
    <ContainerCriar>
      
         <TitleIcon/>
         <FormCriar/>
         <FazerLogin/>

    </ContainerCriar>
  )
}

export default Criar