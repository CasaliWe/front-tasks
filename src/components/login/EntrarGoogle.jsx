//STYLED COMPONENTS
import { EntrarGoogleContainer, LogoGoogle } from '../../assets/styledComponents/authStyles'

//FIREBASE
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from "firebase/auth";
import auth from '../../firebase/config'

//ROUTER
import {useNavigate} from "react-router-dom"


export const EntrarGoogle = () => {

  //REDIRECIONAR
  const navigate = useNavigate();

  
  const logarComGoogle = ()=>{
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
          navigate(`/home`)
      }).catch((error) => {
          //se não der cai aqui
          navigate(`/`)
      });
  }




  return (
    <EntrarGoogleContainer>
         <img src="/division.png"/>
         <button onClick={logarComGoogle}><LogoGoogle src="/google.png"/> <span>Entrar com o Google</span></button>
    </EntrarGoogleContainer>
  )
}
