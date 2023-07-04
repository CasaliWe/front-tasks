//STYLED COMPONENTS
import {  } from '../assets/styledComponents/styled'

//ROUTER
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div style={{color:'white'}}>Página não encontrada, <Link to='/'>Voltar</Link></div>
  )
}

export default NotFound