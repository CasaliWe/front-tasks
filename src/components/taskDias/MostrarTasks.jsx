//STYLED COMPONENTS
import { ContainerMostarTasks, ContainerDiaSemTask } from '../../assets/styledComponents/tasks'

//COMPONENTS    
import { TaskUnica } from './containerTask/TaskUnica'

//HOOKS
import { useEffect, useState } from 'react'




export const MostrarTasks = ({diasSemanaAll}) => {

   const [tasks, setTasks] = useState('')

   useEffect(()=>{
     
    if(diasSemanaAll){
        diasSemanaAll.map((dia)=>{
             if(dia.tasks){

                 dia.tasks.sort(function(a, b) {
                   return a.HorarioTask - b.HorarioTask;
                 });

                 setTasks(dia.tasks)

             }
        })
    }

   }, [diasSemanaAll])

  
   console.log(tasks)

  return (
    <ContainerMostarTasks>

           {tasks? tasks.map((task,i)=>(
                <TaskUnica key={i} task={task}/>
           )) : ''}

           {tasks.length == 0 ? <ContainerDiaSemTask>SEM TAREFAS NO DIA DE HOJE</ContainerDiaSemTask> : ''}

    </ContainerMostarTasks>
  )
}
