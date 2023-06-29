//FIREBASE
import auth from '../firebase/config'
import { onAuthStateChanged } from "firebase/auth";

export const verificarAutenticacao = () => {
    var user = null

    onAuthStateChanged(auth, (user) => {
      if (user) {
         user = user
      }
    });

    return user
}; 
