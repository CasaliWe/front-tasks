//CONTEXT USER
import { useContext, useEffect, useState } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import { ContainerHome } from '../assets/styledComponents/home'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao, sair } from '../helpers/autenticado';

//ROUTER
import {useNavigate} from "react-router-dom"

//VERIFICAR MODO DE LOGIN 
import { modoDeLogin } from '../helpers/modoDeLogin';

//AXIOS
import {enviarDados} from '../helpers/axios'

//COMPONENTS
import { Header } from '../components/home/Header';
import { Pesquisa } from '../components/home/Pesquisa';
import { Adicionar } from '../components/home/Adicionar';
import { Semanas } from '../components/home/Semanas';




const Home = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext
  
  //REDIRECIONAR
  const navigate = useNavigate();

  //IMAGEM DE PERFIL E NOME USUÁRIO
  const [nomeUser,setNomeUser] = useState('')
  const [imgUser,setImgUser] = useState('')

  //SEMANAS E DIAS APÓS BUSCA NO BANCO DE DADOS
  const [semanasDiasAll, setSemanasDiasAll] = useState('')



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
                const formData = new FormData()
                formData.append('uid', user.uid)
                enviarDados('/pegarSemanasHome', formData)
                .then((res)=>{
                    setSemanasDiasAll(res)
                })
                .catch((err)=>{
                    if(err){navigate('/')}
                })

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
    <ContainerHome>

          <Header nomeUser={nomeUser} imgUser={imgUser}/>
          <Pesquisa/>
          <Adicionar/>
          <Semanas semanasDiasAll={semanasDiasAll}/>

    </ContainerHome>
  )
}

export default Home

