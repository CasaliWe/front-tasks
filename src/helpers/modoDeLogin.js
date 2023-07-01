//FIREBASE
import auth from '../firebase/config'
import { onAuthStateChanged } from "firebase/auth";

//AXIOS 
import {enviarDados} from '../helpers/axios'



export const modoDeLogin = () => {

    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
    
          if(!user.displayName){

              //SE FOR LOGIN COM EMAIL E SENHA
              const formData = new FormData();
              formData.append('uid', user.uid);

              enviarDados('/pegarNomeImg', formData)
              .then((res)=>{
                 resolve(res);
              })
              .catch((er)=>{
                 console.log(err)
              })

          }else{

              //SE FOR LOGIN COM GOOGLE
              var Nome = user.displayName
              var ImgName = user.photoURL
              const res = {Nome,ImgName}
              resolve(res);

          }

      }, (error) => {

          reject(error);
          
      });
    });

};

