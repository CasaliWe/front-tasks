//STYLED COMPONENTS
import { EsqueciSenha } from '../../assets/styledComponents/authStyles'

//ROUTER
import { Link } from "react-router-dom"



export const EsqueceuSenha = () => {
  return (
    <EsqueciSenha>
        <Link to='/recuperar'>Esqueci minha senha</Link>
    </EsqueciSenha>
  )
}
