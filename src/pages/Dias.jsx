//CONTEXT USER
import { useContext, useEffect } from 'react'
import {AppContext} from "../App"

//STYLED COMPONENTS
import {  } from '../assets/styledComponents/styled'

//VERIFICAÇÃO DE LOGIN FIREBASE
import { verificarAutenticacao } from '../helpers/autenticado';

//ROUTER
import {useNavigate, useParams} from "react-router-dom"

//AXIOS
import {enviarDados} from '../helpers/axios'




const Dias = () => {
  //CONTEXT USER
  const fullContext = useContext(AppContext)
  const [user, setUser] = fullContext

  //REDIRECIONAR
  const navigate = useNavigate();

  //PEGAR PARÂMETROS
  const {idSemana} = useParams()


  useEffect(()=>{

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
               //FAZER LÓGICA AQUI JA CHEGA OS DADOS FORMATADOS***************
               console.log(res)
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

  }, [])



  return (
    <div>Dias {idSemana} + {user}</div>
  )
}

export default Dias