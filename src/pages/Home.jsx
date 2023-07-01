//CONTEXT USER
import { useContext, useEffect, useState } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../assets/styledComponents/styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao, sair } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"

//VERIFICAR MODO DE LOGIN 
import { modoDeLogin } from '../helpers/modoDeLogin';




const Home = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext
  
  //REDIRECIONAR
  const navigate = useNavigate();

  //IMAGEM DE PERFIL E NOME USUÁRIO
  const [nomeUser,setNomeUser] = useState('')
  const [imgUser,setImgUser] = useState('')



  useEffect(()=>{
       
      //VERIFICAR SE LOGIN FOI GOOGLE OU EMAIL E SENHA, DEFINIR A IMG E NOME;
      const verificarModoLogin = async ()=>{
          try {

            modoDeLogin()
            .then((res)=>{
                setNomeUser(res.Nome)
                setImgUser(res.ImgName)
            })
            .catch((err)=>{
                console.log(err)
            })
            
          } catch (error) {
              console.log(error)
          }
      }
      verificarModoLogin();



      //VERIFICAR SE ESTÁ LOGADO
      const verificarUser = async () => {
          try {
            const user = await verificarAutenticacao();
            if (user) {
              setUser(user.uid)
              //PEGAR OS DADOS COM O UID
            }else{
              navigate(`/`)
            }
          } catch (error) {
              navigate(`/`)
          }
        };
        verificarUser();
      
  }, [])



  return (
    <div>

      <button onClick={sair}>sair</button>

      <p>{nomeUser}</p>
      <img src={imgUser}/>

    </div>
  )
}

export default Home

