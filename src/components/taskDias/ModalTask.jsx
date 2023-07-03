//STYLED COMPONENTS
import { ContainerModalTask, BtnFecharModal } from '../../assets/styledComponents/tasks'

//COMPONENTS
import {Header} from '../taskDias/modal/Header'
import {FormAddTask} from '../taskDias/modal/FormAddTask'



export const ModalTask = ({setModal}) => {
  
  const fecharModal = ()=>{
      setModal(false)
  }

  return (
    <ContainerModalTask>
         <Header/>
         <FormAddTask setModal={setModal}/>
         <BtnFecharModal onClick={fecharModal}>Fechar</BtnFecharModal>
    </ContainerModalTask>
  )
}
