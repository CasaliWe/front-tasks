import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//ROUTER
import {BrowserRouter, Routes, Route} from "react-router-dom"

//PAGES
import Home  from './pages/Home'
import Dias  from './pages/Dias'
import PesquisaPage  from './pages/PesquisaPage.jsx'
import Login  from './pages/Login'
import Criar  from './pages/Criar'
import Recuperar  from './pages/Recuperar'
import NotFound  from './pages/NotFound'
import TaskDia from './pages/TaskDia'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/criar' element={<Criar/>}/>
                    <Route path='/recuperar' element={<Recuperar/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/dias/:idSemana' element={<Dias/>}/>
                    <Route path='/dias/task/:idSemana/:idDia' element={<TaskDia/>}/>
                    <Route path='/pesquisa/:search' element={<PesquisaPage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
           </BrowserRouter>
  </React.StrictMode>,
)
