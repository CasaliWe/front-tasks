//STYLED
import { SemanasStyled } from "../../assets/styledComponents/home";

//COMPONENTS
import {SemanaUnica} from './semanas/SemanaUnica'

//HOOKS
import { useState } from "react";






export const Semanas = () => {

  const [msgVazio, setMsgVazio] = useState(false)
  

  return (
    <SemanasStyled>

        {msgVazio? <p>Adicione sua semana clicando em ADICIONAR +</p> : ''}

        <SemanaUnica/>
        <SemanaUnica/>
        <SemanaUnica/>

    </SemanasStyled>
  )
}
