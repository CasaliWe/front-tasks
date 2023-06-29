//CONTEXT USER
import { useContext } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../styled'




const Criar = () => {
  //CONTEXT USER
  const nome = useContext(AppContext)


  return (
    <div>Criar {nome}</div>
  )
}

export default Criar