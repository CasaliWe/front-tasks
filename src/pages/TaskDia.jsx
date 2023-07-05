//CONTEXT USER
import { useContext, useEffect, useState } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import { StyledDias, ContainerDias } from '../assets/styledComponents/dias'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate, useParams, useLocation} from "react-router-dom"

//COMPONENTS
import {Header} from '../components/dias/Header'
import { DiaUnico } from '../components/dias/DiaUnico';
import { DiaSelecionado } from '../components/taskDias/DiaSelecionado';
import {Pesquisa} from '../components/home/Pesquisa'
import { AdicionarTask } from '../components/taskDias/AdicionarTask';
import { ModalTask } from '../components/taskDias/ModalTask';
import { MostrarTasks } from '../components/taskDias/MostrarTasks';

//VERIFICAR MODO DE LOGIN 
import { modoDeLogin } from '../helpers/modoDeLogin';

//AXIOS
import { enviarDados } from '../helpers/axios';



const TaskDia = () => {

  const location = useLocation();

  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext

  //REDIRECIONAR
  const navigate = useNavigate();

  //PEGAR PARÂMETROS
  const {idSemana, idDia} = useParams()

  //IMAGEM DE PERFIL E NOME USUÁRIO
  const [nomeUser,setNomeUser] = useState('')
  const [imgUser,setImgUser] = useState('')

  //APÓS BUSCA DOS DIAS DA SEMANA
  const [diasSemanaAll, setDiasSemanaAll] = useState('')

  //EXIBIR MODAL ADICIONAR TASK
  const [modal, setModal] = useState(false)


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

                //PEGAR AS TASKS COM O UID
                const formData = new FormData()
                formData.append('uid', user.uid)
                formData.append('semanaId', idSemana)
                formData.append('diaId', idDia)
                enviarDados('/pegarTasksDia', formData)
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
          } catch (err) {
              if(err){navigate('/')}
          }
      };
      verificarUser();

  }, [location])

    
  return (
    <ContainerDias>
         <Header nomeUser={nomeUser} imgUser={imgUser}/>
         <StyledDias>
            {diasSemanaAll ? diasSemanaAll.map((dia, i)=>(

                dia.tasks ? <DiaSelecionado key={i} dia={dia}/> : <DiaUnico key={i} dia={dia}/>
            
            )) : ''}
         </StyledDias>
         <Pesquisa/>
         <AdicionarTask setModal={setModal}/>
         <MostrarTasks diasSemanaAll={diasSemanaAll}/>

         {modal ? <ModalTask setModal={setModal}/> : ''}
    </ContainerDias>
  )
}

export default TaskDia