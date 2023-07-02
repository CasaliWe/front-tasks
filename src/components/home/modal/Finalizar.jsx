//STYLED
import { BtnFecharModal } from "../../../assets/styledComponents/home";




export const Finalizar = ({setModal}) => {

    const fecharModal = () => {
        setModal(false)
    }

  return (
    <BtnFecharModal>
         <button onClick={fecharModal}>Fechar</button>
    </BtnFecharModal>
  )
}
