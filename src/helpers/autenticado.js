//FIREBASE
import auth from '../firebase/config'
import { onAuthStateChanged } from "firebase/auth";

export const verificarAutenticacao = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log('NINGUÉM LOGADO');
      }
    });
}; 
