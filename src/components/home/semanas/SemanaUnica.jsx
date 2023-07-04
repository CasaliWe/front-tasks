//STYLED
import { ContainerSemanaUnica } from "../../../assets/styledComponents/home";

//ROUTER
import { useNavigate } from "react-router-dom";

//ICONS
import { Trash2  } from 'lucide-react';

//AXIOS
import { enviarDados } from "../../../helpers/axios";

//CONTEXT USER
import { useContext, useState } from 'react'
import {AppContext} from "../../../App"




export const SemanaUnica = ({semana}) => {
   //CONTEXT USER
   const fullContext = useContext(AppContext)
   const [user, setUser] = fullContext

   //REDIRECIONAR
   const navigate = useNavigate()

   //ENTRAR NA SEMANA
   const acessarDiasSemana = ()=>{
        //FAZER NAVEGAÇÃO PARA PÁGINA DIAS com ID DA SEMANA CLICADA
        navigate(`/dias/${semana.id}`)
   }

   //DELETAR SEMANA
   const deletarSemana = ()=>{
        const formData = new FormData()
        formData.append('uid', user)
        formData.append('id', semana.id)

        enviarDados('/deletarSemana', formData)
        .then((res)=>{
            navigate(`/`)
        })
        .catch((err)=>{
            if(err){navigate('/')}
        })
   }





  return (
    <ContainerSemanaUnica>
        
        <div onClick={acessarDiasSemana}>
            <h6><span>{semana.InicioFinal.inicio}</span> - <span>{semana.InicioFinal.final}</span></h6>
            <h6>{semana.Titulo}</h6>
        </div>

        <button onClick={deletarSemana}><Trash2  color="#DFBD43" size={30} strokeWidth={2}/></button>
         
    </ContainerSemanaUnica>
  )
}
