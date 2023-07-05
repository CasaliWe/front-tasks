//CONTEXT USER
import { useContext, useEffect, useState } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import { ContainerDias, StyledDias } from '../assets/styledComponents/dias'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate, useParams} from "react-router-dom"

//AXIOS
import {enviarDados} from '../helpers/axios'

//COMPONENTS
import { Header } from '../components/dias/Header';
import { DiaUnico } from '../components/dias/DiaUnico';
import { AvisoDias } from '../components/dias/AvisoDias';
import { Pesquisa } from '../components/home/Pesquisa';

//VERIFICAR MODO DE LOGIN 
import { modoDeLogin } from '../helpers/modoDeLogin';




const Dias = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext

  //REDIRECIONAR
  const navigate = useNavigate();

  //PEGAR PARÂMETROS
  const {idSemana} = useParams()

  //IMAGEM DE PERFIL E NOME USUÁRIO
  const [nomeUser,setNomeUser] = useState('')
  const [imgUser,setImgUser] = useState('')

  //APÓS BUSCA DOS DIAS DA SEMANA
  const [diasSemanaAll, setDiasSemanaAll] = useState('')


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
          
        } catch (err) {
           if(err){
              navigate('/')
              return
           }
        }
    }
    verificarModoLogin();


     
    //VERIFICAR SE ESTÁ LOGADO
    const verificarUser = async () => {
        try {
          const user = await verificarAutenticacao();
          if (user) {

            setUser(user.uid)

            //PEGAR OS DIAS COM O UID
            const formData = new FormData()
            formData.append('uid', user.uid)
            formData.append('id', idSemana)
            enviarDados('/pegarDias', formData)
            .then((res)=>{
               //COLOCANDO O ARRAY DE DIAS DA SEMANA
               setDiasSemanaAll(res)
            })
            .catch((err)=>{
                if(err){
                   navigate('/')
                   return
                }
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
    <ContainerDias>

        <Header  nomeUser={nomeUser} imgUser={imgUser}/>
        <StyledDias>
              {diasSemanaAll ? diasSemanaAll.map((dia, i)=>(
                  <DiaUnico key={i} dia={dia}/>
              )) : ''}
        </StyledDias>
        <Pesquisa/>
        <AvisoDias/>
       
    </ContainerDias>
  )
}

export default Dias