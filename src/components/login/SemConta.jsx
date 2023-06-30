//STYLED COMPONENTS
import { SemContaContainer } from '../../assets/styledComponents/authStyles'

//ROUTER
import { Link } from 'react-router-dom'



export const SemConta = () => {
  return (
    <SemContaContainer>
         <span>Não tem uma conta?</span>
         <Link to='/criar'>Criar</Link>
    </SemContaContainer>
  )
}
