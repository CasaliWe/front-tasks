//CONTEXT USER
import { useContext } from 'react'
import {AppContext} from "../App"


//STYLED COMPONENTS
import {  } from '../styled'





const Pesquisa = () => {
  //CONTEXT USER
  const nome = useContext(AppContext)



  return (
    <div>Pesquisa {nome}</div>
  )
}

export default Pesquisa