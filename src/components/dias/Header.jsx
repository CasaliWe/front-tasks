//STYLED
import { HeaderStyled, HeaderStyledBtns } from "../../assets/styledComponents/dias";

//FIREBASE
import { sair } from '../../helpers/autenticado';

//ROUTER
import { Link } from "react-router-dom";



export const Header = ({nomeUser,imgUser}) => {

  //Pegar apenas primeiro nome
  var reduzir = nomeUser.split(' ')
  var primeiroNome = reduzir[0]


  return (
    <HeaderStyled>
           <HeaderStyledBtns>
              <button onClick={sair}>Sair</button>
              <Link to='/home'>Semanas</Link>
           </HeaderStyledBtns>

           <div>
              <img src={imgUser}/>
              <span>Bom dia, {primeiroNome}</span>
           </div>
    </HeaderStyled>
  )
}
