//STYLED
import { FormModal, ContainerFormModal,ResFormModal1, ResFormModal2 } from "../../../assets/styledComponents/home";

//HOOKS
import { useState, useContext } from "react";
import {AppContext} from "../../../App"

//AXIOS
import { enviarDados } from "../../../helpers/axios";

//ROUTER
import {useNavigate} from "react-router-dom"




export const FormCriar = () => {

    //REDIRECIONAR
    const navigate = useNavigate();

    //CONTEXT USER
    const fullContext = useContext(AppContext)
    const [user, setUser] = fullContext
    
    //ARMAZENA NOME E DATA DO FORM
    const [date, setDate] = useState('')
    const [nomeSemana, setNomeSemana] = useState('')

    //DEFINIR CONTENT QUE IRÁ SER MOSTRADO
    const [diasDisponiveis, setDiasDisponiveis] = useState(false)
    const [diasNaoDisponiveis, setNaoDiasDisponiveis] = useState(false)

    //DATAS FORMATADAS NA ORDEM CORRETA
    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')

    //SE TIVER DATAS JÁ CADASTRADAS NO BANCO INSERE O VALOR, APÓS A VERIFICAÇÃO
    const [jaExiste, setJaExiste] = useState([])



    //Após colocar nome e data inicial, faz verificação de datas NO onSubmit;
    const handleSubmit = (e)=>{
        e.preventDefault()
          
        //nova data com a data que vem do input
        const dataFormatada = new Date(date)
        const formData = new FormData();
        formData.append('date', dataFormatada);
        formData.append('uid', user);
        
        //Enviando para o backend
        enviarDados('/verificarDatasNovaSemana', formData)
        .then((res)=>{
            if(res.inicioFinal){
               //PODE CRIAR AS DATAS
               setData1(res.inicioFinal.inicio)
               setData2(res.inicioFinal.final)
               setNaoDiasDisponiveis(false)
               setDiasDisponiveis(true)
            }else{
               //TEM DATAS JÁ CADASTRADAS
               setJaExiste(res.datasJaExistentes)
               setDiasDisponiveis(false)
               setNaoDiasDisponiveis(true)
            }
        })
        .catch((err)=>{
            if(err){navigate('/')}
        })
    }


    //Após verificar datas, cria a semana;
    const  criarSemanaPosVerificar = ()=>{

        //nova data com a data e nome semana que vem do input
        const dataFormatada = new Date(date)
        const formData = new FormData();
        formData.append('date', dataFormatada);
        formData.append('nome', nomeSemana);
        formData.append('uid', user);
        
        //CRIAR SEMANA
        enviarDados('/criarNovaSemana', formData)
        .then((res)=>{
            navigate(`/`)
        })
        .catch((err)=>{
            if(err){
                navigate('/')
                return
            }
        })
        
    }





  return (
    <ContainerFormModal>

      <FormModal>
           <h4>Escolha a data inicial</h4>
           <form onSubmit={handleSubmit}>
               <input type="date" required value={date} onChange={(e)=>{setDate(e.target.value)}}/>
               <input type="text" required placeholder="Nome" value={nomeSemana} onChange={(e)=>{setNomeSemana(e.target.value)}}/>
               <button type="submit">Verificar</button>
           </form>
      </FormModal>
       

      {diasDisponiveis? (
         <ResFormModal1>
             <p>Semana <span>{nomeSemana}</span> será de: <span>{data1}</span> até <span>{data2}</span></p>

             <button onClick={criarSemanaPosVerificar}>Criar</button>
         </ResFormModal1>
      ): ''}

      {diasNaoDisponiveis? (
           <ResFormModal2>
                <p>Já existe uma semana criada com as datas:</p>
                {jaExiste.map((data, i)=>(
                    <h6 key={i}>* {data}</h6>
                ))}
           </ResFormModal2>
      ) : ''}

    </ContainerFormModal>
  )
}
