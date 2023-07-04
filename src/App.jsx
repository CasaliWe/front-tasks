import './App.css'

//STYLED COMPONENTS
import { ContainerContent, MainContent, GlobalStyle, FooterApp } from './assets/styledComponents/styled'

//ROUTER
import {Link, Outlet} from "react-router-dom"

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

            <FooterApp>Copyright © 2023 <Link to='https://freeladev.online'>Freela dev</Link></FooterApp>

        </ContainerContent>
  )
}

export default App
