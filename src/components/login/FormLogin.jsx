//STYLED COMPONENTS
import { FormLoginContainer } from '../../assets/styledComponents/authStyles'

//HOOKS
import { useState } from 'react'

//FIREBASE
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase/config'


export const FormLogin = () => {

  const [avisoErroLogin, setAvisoErroLogin] = useState(false)

  const [userLogin, setUserLogin] = useState('')
  const [passLogin, setPassLogin] = useState('')

  const handleSubmit = (e)=>{
      e.preventDefault()

      
      signInWithEmailAndPassword(auth, userLogin, passLogin)
      .then((userCredential) => {
          console.log(userCredential)
      })
      .catch((error) => {
          setUserLogin('')
          setPassLogin('')
          setAvisoErroLogin(true)
      });
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
