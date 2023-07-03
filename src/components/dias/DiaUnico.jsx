//STYLED COMPONENTS
import { ContainerDiaUnico, ContainerNumeroDia } from '../../assets/styledComponents/dias'

//ROUTER
import { Link } from 'react-router-dom'





export const DiaUnico = ({dia}) => {
   
  const redirecionar = `/dias/task/${dia.semanaId}/${dia.id}`

  return (
         <ContainerDiaUnico>
             <Link to={redirecionar}>
                 <ContainerNumeroDia>{dia.numero}</ContainerNumeroDia>
                 <div>{dia.dia}</div>
             </Link>
         </ContainerDiaUnico>
  )
}
