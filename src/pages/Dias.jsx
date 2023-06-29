//CONTEXT USER
import { useContext } from 'react'
import {AppContext} from "../App"


//STYLED COMPONENTS
import {  } from '../styled'




const Dias = () => {
  //CONTEXT USER
  const nome = useContext(AppContext)



  return (
    <div>Dias {nome}</div>
  )
}

export default Dias