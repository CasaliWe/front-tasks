//STYLED COMPONENTS
import { IrParaLoginContainer } from '../../assets/styledComponents/authStyles'

//ROUTER
import { Link } from 'react-router-dom'



export const FazerLogin = () => {
  return (
    <IrParaLoginContainer>
         <span>Já tem uma conta?</span>
         <Link to='/'>Entrar</Link>
    </IrParaLoginContainer>
  )
}