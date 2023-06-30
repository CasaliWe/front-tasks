//FIREBASE
import auth from '../firebase/config'
import { onAuthStateChanged } from "firebase/auth";


export const verificarAutenticacao = () => {

    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      }, (error) => {
        reject(error);
      });
    });

};