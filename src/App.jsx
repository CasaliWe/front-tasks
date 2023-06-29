import './App.css'

//AXIOS
import {fetchUsers} from './helpers/axios'

//STYLED COMPONENTS
import { Teste } from './styled'

//FIREBASE
import auth from './firebase/config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from "firebase/auth";

//ROUTER
import {Link, Outlet} from "react-router-dom"




function App() {

  const getUsers = async () => {
      try {
        const users = await fetchUsers();
        console.log(users)
      } catch (error) {
        console.log(error)
      }
  };

  return (
        <div className="App">

              <button onClick={getUsers}>BUSCAR</button>

              <Link to='/'>HME</Link>
              <Link to='/sobre'>SOBRE</Link>

              <Teste>OI <span>WESLEI</span></Teste>

              <Outlet/>
        </div>
  )
}

export default App
