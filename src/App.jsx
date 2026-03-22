import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import AboutCompony from './pages/AboutCompony'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import Dostavka from './pages/Dostavka'
import Payment from './pages/Payment'
import Postavshikam from './pages/Postavshikam'
import Proizvodsvo from './pages/Proizvodsvo'
import Wellcome from './pages/Wellcome'
import Home from './pages/Home'
import Info from './pages/Info'
import Carzinka from './pages/Carzinka'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
              <Route path='/AboutCompony' element={<AboutCompony/>}/>
              <Route path='/Catalog' element={<Catalog/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/Dostavka' element={<Dostavka/>}/>
              <Route path='/Payment' element={<Payment/>} />
              <Route path='/Postavshikam' element={<Postavshikam/>}/>
              <Route  path='/Proizvodsvo'  element={<Proizvodsvo/>}/>
              <Route  path='/Wellcome' element={<Wellcome/>}/>
              <Route  path='/Carzinka' element={<Carzinka/>}/>
              <Route  path='/Info/:id' element={<Info/>}/>
              <Route index  element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App