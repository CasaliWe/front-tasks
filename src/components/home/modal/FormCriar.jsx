//STYLED
import { FormModal, ContainerFormModal,ResFormModal1, ResFormModal2 } from "../../../assets/styledComponents/home";

//HOOKS
import { useState } from "react";




export const FormCriar = () => {
    
    //ARMAZENA NOME E DATA DO FORM
    const [date, setDate] = useState('')
    const [nomeSemana, setNomeSemana] = useState('')

    //DEFINIR CONTENT QUE IRÁ SER MOSTRADO
    const [diasDisponiveis, setDiasDisponiveis] = useState(false)
    const [diasNaoDisponiveis, setNaoDiasDisponiveis] = useState(false)

    //DATAS FORMATADAS NA ORDEM CORRETA
    const [data1, setData1] = useState('16/03/23')
    const [data2, setData2] = useState('18/03/23')



    //Após colocar nome e data inicial, faz verificação de datas;
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        //VERIFICAR DATA**************
    }


    //Após verificar datas, cria a semana;
    const  criarSemanaPosVerificar = ()=>{
        
        //CRIAR SEMANA****************
        
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
                <h6>16/04/23</h6>
                <h6>17/04/23</h6>
                <h6>18/04/23</h6>
           </ResFormModal2>
      ) : ''}

    </ContainerFormModal>
  )
}
