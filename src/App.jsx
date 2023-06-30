import './App.css'

//STYLED COMPONENTS
import { ContainerContent, MainContent, GlobalStyle } from './assets/styledComponents/styled'

//ROUTER
import {Outlet} from "react-router-dom"

//CONTEXT
import { createContext, useState } from "react";
export const AppContext = createContext()



function App() {

  //LOGIN CONTEXT
  const [user, setUser] = useState('UID')


  return (
        <ContainerContent className="App">
            <MainContent>

                <AppContext.Provider value={[user,setUser]}>
                    <GlobalStyle/>
                    <Outlet/>
                </AppContext.Provider>

            </MainContent>  
        </ContainerContent>
  )
}

export default App
