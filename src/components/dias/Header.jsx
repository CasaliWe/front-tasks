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

  //Pegar periodo do dia
  const Data = new Date();
  const HoraDia = Data.toLocaleTimeString([], { hour: '2-digit', hour12: false });
  
  var periodoDia = '';
  
  if (HoraDia < '06:00') {
    periodoDia = 'Boa madrugada';
  } else if (HoraDia < '12:00') {
    periodoDia = 'Bom dia';
  } else if (HoraDia < '19:00') {
    periodoDia = 'Boa tarde';
  } else if (HoraDia < '23:00') {
    periodoDia = 'Boa noite';
  }



  return (
    <HeaderStyled>
           <HeaderStyledBtns>
              <button onClick={sair}>Sair</button>
              <Link to='/home'>Semanas</Link>
           </HeaderStyledBtns>

           <div>
              <img src={imgUser}/>
              <span>{periodoDia}, {primeiroNome}</span>
           </div>
    </HeaderStyled>
  )
}
