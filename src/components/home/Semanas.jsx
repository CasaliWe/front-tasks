//STYLED
import { SemanasStyled } from "../../assets/styledComponents/home";

//COMPONENTS
import {SemanaUnica} from './semanas/SemanaUnica'

//HOOKS
import { useState } from "react";






export const Semanas = ({semanasDiasAll}) => {


  return (
    <SemanasStyled>

        {semanasDiasAll.length == 0 ? <p>Adicione sua semana clicando em ADICIONAR +</p> : ''}
            
        {semanasDiasAll ? semanasDiasAll.map((semana, i)=>(
            <SemanaUnica key={i} semana={semana}/>
        )) : ''}

    </SemanasStyled>
  )
}
