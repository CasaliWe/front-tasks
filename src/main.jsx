import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//ROUTER
import {BrowserRouter, Routes, Route} from "react-router-dom"

//PAGES
import Home  from './pages/Home'
import Sobre from './pages/Sobre'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sobre' element={<Sobre/>}/>
                </Route>
            </Routes>
           </BrowserRouter>
  </React.StrictMode>,
)
