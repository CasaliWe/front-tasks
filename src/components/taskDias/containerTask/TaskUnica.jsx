//STYLED COMPONENTS
import { ContainerTaskUnica, ContentTaskSpan } from '../../../assets/styledComponents/tasks'

//ICONS
import { Trash2 } from 'lucide-react'

//AXIOS
import { enviarDados } from '../../../helpers/axios'

//ROUTER
import { useNavigate } from 'react-router-dom'




export const TaskUnica = ({task}) => {

  const navigate = useNavigate()
  
  //CONCLUIR TAREFA
  const concluir = ()=>{
       
  }


  //EXLUIR TAREFA
  const deletarTask = ()=>{

    const formData = new FormData()
    formData.append('uid', task.Uid)
    formData.append('semanaId', task.SemanaId)
    formData.append('diaId', task.DiaId)
    formData.append('taskId', task.id)

    enviarDados('/excluirTask', formData)
    .then((res)=>{  
          navigate(`/dias/task/${task.SemanaId}/${task.DiaId}`)
    })
    .catch((err)=>{
        console.log(err)
    })
        
  }



  
  return (
    <ContainerTaskUnica>
         <span><input type="checkbox" onChange={concluir}/></span>

         <ContentTaskSpan>
            <h6>{task.HorarioTask < 10 ? '0' + task.HorarioTask + ':00 hrs' : task.HorarioTask + ':00 hrs'}</h6>
            <div>{task.Conteudo}</div>
         </ContentTaskSpan>

         <span onClick={deletarTask}> <Trash2 color="#DFBD49" size={25} strokeWidth={2}/> </span>
    </ContainerTaskUnica>
  )
}
