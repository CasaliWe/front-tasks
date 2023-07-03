//STYLED COMPONENTS
import { ContainerFormTask } from '../../../assets/styledComponents/tasks'

//HOOKS
import { useState, useContext } from 'react'
import {AppContext} from "../../../App"

//ROUTER
import {useParams, useNavigate} from "react-router-dom"

//AXIOS
import { enviarDados } from '../../../helpers/axios'


 



export const FormAddTask = ({setModal}) => {

  //REDIRECIONAR
  const navigate = useNavigate()

  //PEGAR PARÂMETROS
  const {idSemana, idDia} = useParams()

  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext

  const [hora,setHora] = useState('')
  const [contentTask,setContentTask] = useState('')

  const criarTask = (e)=>{
      e.preventDefault()
         
      //ENVIAR DADOS PARA BACKEND CRIAR NOVA TASK
      const formData = new FormData()
      formData.append('uid', user)
      formData.append('idSemana', idSemana)
      formData.append('idDia', idDia)
      formData.append('hora', hora)
      formData.append('content', contentTask)
      
      enviarDados('/criarTask', formData)
      .then((res)=>{
          setModal(false)
          navigate(`/dias/task/${idSemana}/${idDia}`)
      })
      .catch((err)=>{
          console.log(err)
      })

  }


  return (
    <ContainerFormTask>
         <form onSubmit={criarTask}>
             <select required onChange={(e)=>{setHora(e.target.value)}}>
                 <option value="">Horário</option>
                 <option value="1">1am</option>
                 <option value="2">2am</option>
                 <option value="3">3am</option>
                 <option value="4">4am</option>
                 <option value="5">5am</option>
                 <option value="6">6am</option>
                 <option value="7">7am</option>
                 <option value="8">8am</option>
                 <option value="9">9am</option>
                 <option value="10">10am</option>
                 <option value="11">11am</option>
                 <option value="12">12pm - meio dia</option>
                 <option value="13">1pm</option>
                 <option value="14">2pm</option>
                 <option value="15">3pm</option>
                 <option value="16">4pm</option>
                 <option value="17">5pm</option>
                 <option value="18">6pm</option>
                 <option value="19">7pm</option>
                 <option value="20">8pm</option>
                 <option value="21">9pm</option>
                 <option value="22">10pm</option>
                 <option value="23">11pm</option>
                 <option value="0">12am - meia noite</option>
             </select>
             <input type="text" placeholder='Tarefa' required value={contentTask} onChange={(e)=>{setContentTask(e.target.value)}}/>

             <button type='submit'>Criar</button>
         </form>
    </ContainerFormTask>
  )
}

