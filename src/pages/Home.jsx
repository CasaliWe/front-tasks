//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../assets/styledComponents/styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao, sair } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"




const Home = () => {
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
    <div><button onClick={sair}>sair</button></div>
  )
}

export default Home

