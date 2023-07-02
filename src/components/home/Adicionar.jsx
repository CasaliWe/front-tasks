//STYLED
import { AdicionarStyled, ContainerModal } from "../../assets/styledComponents/home";

//HOOKS
import { useState } from "react";

//COMPONENTS
import { Header } from "./modal/Header";
import { FormCriar } from "./modal/FormCriar";
import { Finalizar } from "./modal/Finalizar";





export const Adicionar = () => {

  const [modal, setModal] = useState(false)

  const abrirModal = ()=>{
      setModal(true)
  }


  return (
    <AdicionarStyled>
         <span>Suas Semanas</span>
         <button onClick={abrirModal}>Adicionar +</button>
         
         {modal? (
            <ContainerModal>
                <Header/>
                <FormCriar/>
                <Finalizar setModal={setModal}/>
            </ContainerModal>
         ) : ''}
    </AdicionarStyled>
  )
}
