//STYLED COMPONENTS
import { FormRecuperarContainer } from '../../assets/styledComponents/authStyles'

//HOOKS
import { useState } from 'react'

//FIREBASE
import { recuperarSenha } from '../../helpers/autenticado'

//ROUTER
import { useNavigate } from 'react-router-dom'





export const EnviarEmail = () => {

  //REDIRECIONAR
  const navigate = useNavigate();

  const [avisoEmailErr, setAvisoEmailErr] = useState(null)
  const [avisoEmailEnviado, setAvisoEmailEnviado] = useState(null)
  const [emailVerificar, setEmailVerificar] = useState('')
  

  const handleSubmit = (e)=>{
        e.preventDefault()
        
        recuperarSenha(emailVerificar)
        .then((res)=>{
            setAvisoEmailEnviado('Verifique seu email para recuperar sua senha!')
        })
        .catch((err)=>{
            setAvisoEmailErr('Email não cadastrado!')
        })
  }
  


  return (
    <FormRecuperarContainer>
        <form onSubmit={handleSubmit}>
            <h3>Recuperar senha</h3>

            <input type="email" required placeholder='Email' value={emailVerificar} onChange={(e)=>{setEmailVerificar(e.target.value)}} />

            <button type='submit'>RECUPERAR</button>

            {avisoEmailErr ? <p>{avisoEmailErr}</p> : ''}
            {avisoEmailEnviado ? <h6>{avisoEmailEnviado}</h6> : ''}
        </form>
    </FormRecuperarContainer>
  )
}

