import './App.css'

//AXIOS
import {fetchUsers} from './helpers/axios'

//STYLED COMPONENTS
import { ContainerContent, MainContent, GlobalStyle } from './styled'

//FIREBASE
import auth from './firebase/config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

//ROUTER
import {Link, Outlet} from "react-router-dom"

//CONTEXT
import { createContext, useState } from "react";
export const AppContext = createContext()



function App() {

  //LOGIN CONTEXT
  const [user, setUser] = useState('weslei')
   
  //BUSCAR DADOS API
  const getUsers = async () => {
      try {
        const users = await fetchUsers();
        console.log(users)
      } catch (error) {
        console.log(error)
      }
  };


  return (
        <ContainerContent className="App">
            <MainContent>

                <AppContext.Provider value={user}>
                    <GlobalStyle/>
                    <Outlet/>
                </AppContext.Provider>

            </MainContent>  
        </ContainerContent>
  )
}

export default App
