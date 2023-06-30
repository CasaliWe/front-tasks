//STYLED COMPONENTS
import { FormCriarContainer } from '../../assets/styledComponents/authStyles'

//HOOKS
import { useState } from 'react'

//FIREBASE
import { CriarLoginEmailSenha } from '../../helpers/autenticado'

//ROUTER
import {useNavigate} from "react-router-dom"





export const FormCriar = () => {

  //REDIRECIONAR
  const navigate = useNavigate();

  const [avisoErroCriar, setAvisoErroCriar] = useState(null)

  const [emailCriar, setEmailCriar] = useState('')
  const [nomeCriar, setNomeCriar] = useState('')
  const [passCriar, setPassCriar] = useState('')
  const [confirmCriar, setConfirmCriar] = useState('')
  const [imageCriar, setImageCriar] = useState(null)

  const handleSubmit = (e)=>{
      e.preventDefault()
       

      if(passCriar == confirmCriar){
             
          CriarLoginEmailSenha(emailCriar, passCriar)
          .then((res)=>{
                 if(res.user){
                    //SALVAR IMG BANCO************************************************
                    //SALVAR NOME BANCO***********************************************
                    navigate('/home')
                 }
          })
          .catch((err)=>{
                //JÁ CADASTRADO
                setAvisoErroCriar('Email já cadastrado!')
                setEmailCriar('')
                setNomeCriar('')
                setPassCriar('')
                setConfirmCriar('')
                setImageCriar(null)
          })
        
      }else{
          //SENHA NÃO IGUAIS
          setAvisoErroCriar('Senhas diferentes!')
          setEmailCriar('')
          setNomeCriar('')
          setPassCriar('')
          setConfirmCriar('')
          setImageCriar(null)
      }

  }


  return (
    <FormCriarContainer>
        <form onSubmit={handleSubmit}>
            <input type="email" required placeholder='Email' value={emailCriar} onChange={(e)=>{setEmailCriar(e.target.value)}} />
            <input type="text" required placeholder='Nome' value={nomeCriar} onChange={(e)=>{setNomeCriar(e.target.value)}} />
            <input type="password" minLength={6} required placeholder='Senha' value={passCriar} onChange={(e)=>{setPassCriar(e.target.value)}} />
            <input type="password" minLength={6} required placeholder='Confirme' value={confirmCriar} onChange={(e)=>{setConfirmCriar(e.target.value)}} />
            <input type="file" required placeholder='Foto de perfil' onChange={(e)=>{setImageCriar(e.target.files[0])}} />
            
            <button type='submit'>CRIAR</button>

            {avisoErroCriar ? <p>{avisoErroCriar}</p> : ''}
        </form>
    </FormCriarContainer>
  )
}
