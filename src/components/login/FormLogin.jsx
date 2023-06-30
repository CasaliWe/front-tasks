//STYLED COMPONENTS
import { FormLoginContainer } from '../../assets/styledComponents/authStyles'

//HOOKS
import { useState } from 'react'

//FIREBASE
import auth from '../../firebase/config'
import { fazerLoginEmailSenha } from '../../helpers/autenticado'

//ROUTER
import { useNavigate } from 'react-router-dom'


export const FormLogin = () => {

  //REDIRECIONAR
  const navigate = useNavigate();

  const [avisoErroLogin, setAvisoErroLogin] = useState(false)

  const [userLogin, setUserLogin] = useState('')
  const [passLogin, setPassLogin] = useState('')

  const handleSubmit = (e)=>{
      e.preventDefault()

      
      fazerLoginEmailSenha(userLogin,passLogin)
      .then((res)=>{
           console.log(res.user)
           navigate('/home')
      })
      .catch((err)=>{
           setAvisoErroLogin(true)
      })
  }


  return (
    <FormLoginContainer>
        <form onSubmit={handleSubmit}>
            <input type="email" required placeholder='Email' value={userLogin} onChange={(e)=>{setUserLogin(e.target.value)}} />
            <input type="password" required placeholder='Senha' value={passLogin} onChange={(e)=>{setPassLogin(e.target.value)}} />

            <button type='submit'>ENTRAR</button>

            {avisoErroLogin ? <p>Email ou senha incorreto!</p> : ''}
        </form>
    </FormLoginContainer>
  )
}
