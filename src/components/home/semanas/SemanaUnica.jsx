//STYLED
import { ContainerSemanaUnica } from "../../../assets/styledComponents/home";

//ROUTER
import { useNavigate } from "react-router-dom";

//ICONS
import { Trash2  } from 'lucide-react';




export const SemanaUnica = () => {

   //REDIRECIONAR
   const navigate = useNavigate()

   //ENTRAR NA SEMANA
   const acessarDiasSemana = ()=>{
        //FAZER NAVEGAÇÃO PARA PÁGINA DIAS********
        navigate()
   }

   //DELETAR SEMANA
   const deletarSemana = ()=>{
        //FAZER O DELETE DA SEMANA
   }





  return (
    <ContainerSemanaUnica onClick={acessarDiasSemana}>
        
        <div>
            <h6><span>23/10/2023</span> - <span>29/10/2023</span></h6>
            <h6>Semana dos eventos</h6>
        </div>

        <button onClick={deletarSemana}><Trash2  color="#DFBD43" size={30} strokeWidth={2}/></button>
         
    </ContainerSemanaUnica>
  )
}
