//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import { ContainerLogin } from '../assets/styledComponents/authStyles'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"

//COMPONENTS
import { TitleIcon } from '../components/login/TitleIcon';
import { FormLogin } from '../components/login/FormLogin';
import { SemConta } from '../components/login/SemConta';
import { EntrarGoogle } from '../components/login/EntrarGoogle';


const Login = () => {
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
          setUser(user.uid)
          navigate(`/home`);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    verificarUser();

  }, [])


  return (
    <ContainerLogin>
        <TitleIcon/>
        <FormLogin/>
        <SemConta/>
        <EntrarGoogle/>
    </ContainerLogin>
  )
}

export default Login