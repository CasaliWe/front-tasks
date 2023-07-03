//STYLED COMPONENTS
import { ContainerTasksPesquisa, ContainerTaskUnicaPesquisa, ContentTaskSpanPesquisa } from '../../assets/styledComponents/pesquisa'

//ICON
import { Trash2 } from 'lucide-react'

//COMPONENTS
import {TaskPesquisaUnica} from '../../components/pesquisa/TaskPesquisaUnica'





export const MostrarTasksPesquisa = ({tarefasPesquisa, search}) => {



  return (
    <ContainerTasksPesquisa>


        {tarefasPesquisa? tarefasPesquisa.map((task, i)=>(

             <TaskPesquisaUnica key={i} task={task} search={search}/>
             
        )):''}


        {tarefasPesquisa? tarefasPesquisa.length == 0 ? <p style={{marginTop: '30px', textAlign: 'center'}}>Nenhum resultado!</p> : '' : ''}


    </ContainerTasksPesquisa>
  )
}
