//FIREBASE
import auth from '../firebase/config'
import { onAuthStateChanged } from "firebase/auth";


//VERIFICA SE USER ESTÁ LOGADO
export const verificarAutenticacao = () => {

    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      }, (error) => {
        reject(error);
      });
    });

};


//FAZER LOGOUT
export const sair = ()=>{
  auth.signOut()
  .then(() => {
      window.location.href='/'
  })
  .catch((error) => {
    console.log('Ocorreu um erro ao fazer logout:', error);
  });
}