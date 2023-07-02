//STYLED
import { PesquisaStyled } from "../../assets/styledComponents/home";

//HOOKS
import { useState } from "react";

//ROUTER
import { useNavigate } from "react-router-dom";

//ICONS
import { Search } from "lucide-react";





export const Pesquisa = () => {

  //REDIRECIONAR
  const navigate = useNavigate();

  const [pesquisa, setPesquisa] = useState('')

  const handleSubmit = (e)=>{
         e.preventDefault()
         setPesquisa('')
         navigate(`/pesquisa/${pesquisa}`)
  }


  return (
    <PesquisaStyled>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Pesquisar" required value={pesquisa} onChange={(e)=>{setPesquisa(e.target.value)}}/>
            <button type="submit"><Search color="#DFBD43" size={25} strokeWidth={2}/></button>
         </form>
    </PesquisaStyled>
  )
}
