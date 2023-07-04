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

      const formData = new FormData()
      formData.append('uid', task.Uid)
      formData.append('semanaId', task.SemanaId)
      formData.append('diaId', task.DiaId)
      formData.append('taskId', task.id)

      enviarDados('/concluirTask', formData)
      .then((res)=>{  
          navigate(`/dias/task/${task.SemanaId}/${task.DiaId}`)
      })
      .catch((err)=>{
          if(err){navigate('/')}
      })

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
        if(err){navigate('/')}
    })
        
  }



  
  return (
    <ContainerTaskUnica>
         <span><input type="checkbox" checked={task.Concluida ? true : false} onChange={concluir}/></span>

         <ContentTaskSpan>
            <h6>{task.HorarioTask < 10 ? '0' + task.HorarioTask + ':00 hrs' : task.HorarioTask + ':00 hrs'}</h6>
            <div style={{ textDecoration: task.Concluida == true ? 'line-through' : '' }}>{task.Conteudo}</div>
         </ContentTaskSpan>

         <span onClick={deletarTask}> <Trash2 color="#DFBD49" size={25} strokeWidth={2}/> </span>
    </ContainerTaskUnica>
  )
}
