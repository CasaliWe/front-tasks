//STYLED COMPONENTS
import { FormRecuperarContainer } from '../../assets/styledComponents/authStyles'

//HOOKS
import { useState } from 'react'

//FIREBASE
import {  } from '../../helpers/autenticado'

//ROUTER
import { useNavigate } from 'react-router-dom'





export const EnviarEmail = () => {

  //REDIRECIONAR
  const navigate = useNavigate();

  const [avisoEmail, setAvisoEmail] = useState(null)
  const [emailVerificar, setEmailVerificar] = useState('')
  

  const handleSubmit = (e)=>{
        e.preventDefault()
        

        //LÓGICA PARA ENVIAR O EMAIL DE RECUPERAÇÃO USANDO FIREBASE NO ARQUIVO SEPARADO*********
        console.log(emailVerificar)
  }
  


  return (
    <FormRecuperarContainer>
        <form onSubmit={handleSubmit}>
            <h3>Recuperar senha</h3>

            <input type="email" required placeholder='Email' value={emailVerificar} onChange={(e)=>{setEmailVerificar(e.target.value)}} />

            <button type='submit'>RECUPERAR</button>

            {avisoEmail ? <p>{avisoEmail}</p> : ''}
        </form>
    </FormRecuperarContainer>
  )
}

