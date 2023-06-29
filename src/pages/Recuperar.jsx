//CONTEXT USER
import { useContext } from 'react'
import {AppContext} from "../App"


//STYLED COMPONENTS
import {  } from '../styled'





const Recuperar = () => {
  //CONTEXT USER
  const nome = useContext(AppContext)



  return (
    <div>Recuperar {nome}</div>
  )
}

export default Recuperar