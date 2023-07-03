//STYLED COMPONENTS
import { ContainerAdicionarTask } from '../../assets/styledComponents/tasks'






export const AdicionarTask = ({setModal}) => {
   
   const mostrarModal = ()=>{
        setModal(true)
   }

  return (
    <ContainerAdicionarTask>
         <span>SUAS TAREFAS</span>
         <button onClick={mostrarModal}>Adicionar +</button>
    </ContainerAdicionarTask>
  )
}
