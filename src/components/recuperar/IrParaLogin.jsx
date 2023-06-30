//STYLED COMPONENTS
import { ContainerIrParaLogin } from '../../assets/styledComponents/authStyles'

//ROUTER
import { Link } from 'react-router-dom'



export const IrParaLogin = () => {
  return (
    <ContainerIrParaLogin>
          
         <Link to='/'>Voltar para login</Link>

    </ContainerIrParaLogin>
  )
}
