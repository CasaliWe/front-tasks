//STYLED COMPONENTS
import { ContainerDiaUnico, ContainerNumeroDiaSelecionado } from '../../assets/styledComponents/dias'

//ROUTER
import { Link } from 'react-router-dom'





export const DiaSelecionado = ({dia}) => {
   
  const redirecionar = `/dias/task/${dia.semanaId}/${dia.id}`

  return (
         <ContainerDiaUnico>
             <Link to={redirecionar}>
                 <ContainerNumeroDiaSelecionado>{dia.numero}</ContainerNumeroDiaSelecionado>
                 <div>{dia.dia}</div>
             </Link>
         </ContainerDiaUnico>
  )
}
