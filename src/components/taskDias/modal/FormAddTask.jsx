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
            if(err){
                navigate('/')
                return
            }
      })

  }


  return (
    <ContainerFormTask>
         <form onSubmit={criarTask}>
             <select required onChange={(e)=>{setHora(e.target.value)}}>
                 <option value="">Horário</option>
                 <option value="1">1:00 hrs</option>
                 <option value="2">2:00 hrs</option>
                 <option value="3">3:00 hrs</option>
                 <option value="4">4:00 hrs</option>
                 <option value="5">5:00 hrs</option>
                 <option value="6">6:00 hrs</option>
                 <option value="7">7:00 hrs</option>
                 <option value="8">8:00 hrs</option>
                 <option value="9">9:00 hrs</option>
                 <option value="10">10:00 hrs</option>
                 <option value="11">11:00 hrs</option>
                 <option value="12">12:00 hrs - meio dia</option>
                 <option value="13">13:00 hrs</option>
                 <option value="14">14:00 hrs</option>
                 <option value="15">15:00 hrs</option>
                 <option value="16">16:00 hrs</option>
                 <option value="17">17:00 hrs</option>
                 <option value="18">18:00 hrs</option>
                 <option value="19">19:00 hrs</option>
                 <option value="20">20:00 hrs</option>
                 <option value="21">21:00 hrs</option>
                 <option value="22">22:00 hrs</option>
                 <option value="23">23:00 hrs</option>
                 <option value="0">00:00 hrs - meia noite</option>
             </select>
             <input type="text" placeholder='Tarefa' required value={contentTask} onChange={(e)=>{setContentTask(e.target.value)}}/>

             <button type='submit'>Criar</button>
         </form>
    </ContainerFormTask>
  )
}

