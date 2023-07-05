//STYLED
import { HeaderStyled } from "../../assets/styledComponents/home";

//FIREBASE
import { sair } from '../../helpers/autenticado';


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
           <button onClick={sair}>Sair</button>

           <div>
              <span>
                 <img src={imgUser}/>
              </span>
              <h6>{periodoDia}, {primeiroNome}</h6>
           </div>
    </HeaderStyled>
  )
}
