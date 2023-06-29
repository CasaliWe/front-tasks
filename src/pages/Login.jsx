//CONTEXT USER
import { useContext } from 'react'
import {AppContext} from "../App"


//STYLED COMPONENTS
import {  } from '../styled'



const Login = () => {
  //CONTEXT USER
  const nome = useContext(AppContext)


  return (
    <div>Login {nome}</div>
  )
}

export default Login