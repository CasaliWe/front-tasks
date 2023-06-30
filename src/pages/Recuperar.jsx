//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import { ContainerRecuperar } from '../assets/styledComponents/authStyles'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"

//COMPONENTS
import { TitleIcon } from '../components/login/TitleIcon';
import { EnviarEmail } from '../components/recuperar/EnviarEmail';
import { IrParaLogin } from '../components/recuperar/IrParaLogin';



const Recuperar = () => {
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
    <ContainerRecuperar>

        <TitleIcon/>
        <EnviarEmail/>
        <IrParaLogin/>
      
    </ContainerRecuperar>
  )
}

export default Recuperar