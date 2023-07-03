//CONTEXT USER
import { useContext, useEffect, useState } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../assets/styledComponents/styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate, useParams, useLocation} from "react-router-dom"

//COMPONENTS
import {Header} from '../components/dias/Header'
import { Pesquisa } from '../components/home/Pesquisa';
import { MostrarTasksPesquisa } from '../components/pesquisa/MostrarTasksPesquisa';

//VERIFICAR MODO DE LOGIN 
import { modoDeLogin } from '../helpers/modoDeLogin';

//AXIOS
import { enviarDados } from '../helpers/axios';





const PesquisaPage = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext
  
  //REDIRECIONAR
  const navigate = useNavigate();

  //PEGAR PARÂMETRO
  const {search} = useParams()

  //IMAGEM DE PERFIL E NOME USUÁRIO
  const [nomeUser,setNomeUser] = useState('')
  const [imgUser,setImgUser] = useState('')

  const location = useLocation();

  //TAREFAS ENCONTRADAS DA PESQUISA
  const [tarefasPesquisa, setTarefasPesquisa] = useState()




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



       
      //VERIFICAR SE USER ESTÁ LOGADO E FAZER A BUSCA
      const verificarUser = async () => {
          try {
            const user = await verificarAutenticacao();
            if (user) {

              setUser(user.uid)
              
              //fazer busca 
              const formData = new FormData()
              formData.append('uid', user.uid)
              formData.append('pesquisa', search)
              enviarDados('/pesquisaTask', formData)
              .then((res)=>{
                 setTarefasPesquisa(res)
              })
              .catch((err)=>{
                 console.log(err)
              })

            }else{
              navigate(`/`)
            }
          } catch (error) {
              navigate(`/`)
          }
      };

      verificarUser();
      
  }, [location])



  return (
    <div>
        
          <Header nomeUser={nomeUser} imgUser={imgUser}/>
          <Pesquisa/>

          <div style={{textAlign: 'center', color: 'white', marginTop: '20px'}}>
             <p><span style={{color: '#DFBD43'}}>{tarefasPesquisa ? tarefasPesquisa.length : '' }</span> Tarefas encontradas para:</p>
             <h2>"{search}"</h2>
          </div>
     
          <MostrarTasksPesquisa tarefasPesquisa={tarefasPesquisa} search={search}/>
   
    </div>
  )
}

export default PesquisaPage