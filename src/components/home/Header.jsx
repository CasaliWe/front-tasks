//STYLED
import { HeaderStyled } from "../../assets/styledComponents/home";

//FIREBASE
import { sair } from '../../helpers/autenticado';


export const Header = ({nomeUser,imgUser}) => {

  //Pegar apenas primeiro nome
  var reduzir = nomeUser.split(' ')
  var primeiroNome = reduzir[0]


  return (
    <HeaderStyled>
           <button onClick={sair}>Sair</button>

           <div>
              <img src={imgUser}/>
              <span>Bom dia, {primeiroNome}</span>
           </div>
    </HeaderStyled>
  )
}
