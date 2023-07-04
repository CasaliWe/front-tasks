//STYLED COMPONENTS
import { ContainerTaskUnicaPesquisa, ContentTaskSpanPesquisa } from '../../assets/styledComponents/pesquisa'

//ICON
import { Trash2 } from 'lucide-react'

//AXIOS
import { enviarDados } from '../../helpers/axios'

//ROUTER
import { useNavigate } from 'react-router-dom'


 



export const TaskPesquisaUnica = ({task, search}) => {
     
    //REDIRECIONAR
    const navigate = useNavigate()
    

    //CONCLUIR TASK
    const concluirTask = () => {
        const formData = new FormData()
        formData.append('uid', task.uid)
        formData.append('semanaId', task.semana)
        formData.append('diaId', task.dia)
        formData.append('taskId', task.id)
  
        enviarDados('/concluirTask', formData)
        .then((res)=>{  
            navigate(`/pesquisa/${search}`)
        })
        .catch((err)=>{
            if(err){navigate('/')}
        })
    }


    //DELETAR TASK
    const deletarTask = ()=>{

        const formData = new FormData()
        formData.append('uid', task.uid)
        formData.append('semanaId', task.semana)
        formData.append('diaId', task.dia)
        formData.append('taskId', task.id)
    
        enviarDados('/excluirTask', formData)
        .then((res)=>{  
            navigate(`/pesquisa/${search}`)
        })
        .catch((err)=>{
            if(err){navigate('/')}
        })
            
    }





  return (
    <ContainerTaskUnicaPesquisa>
        <span><input type="checkbox"  checked={task.concluida ? true : false} onChange={concluirTask}/></span>

        <ContentTaskSpanPesquisa>
            <h6>{task.hora < 10? '0' + task.hora : task.hora}hrs - {task.data}</h6>
            <div style={{ textDecoration: task.concluida == true ? 'line-through' : '' }}>{task.conteudo}</div>
        </ContentTaskSpanPesquisa>

        <span onClick={deletarTask}> <Trash2 color="#DFBD49" size={25} strokeWidth={2}/> </span>
    </ContainerTaskUnicaPesquisa>
  )
}
