
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CarsList from './pages/CarsList'
import ClientList from './pages/ClientList'
import Home from './pages/Home'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import MainLayout from './components/MainLayout'
import AuthLayout from './components/AuthLayout'
import Services from './pages/Services'
import Settings from './pages/Settings'

function App() {

  return (
    <>
     
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={ <Register /> } />
        </Route>

        {/* Rotas Privadas  */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carsList" element={<CarsList />} />
          <Route path="/clientList" element={<ClientList />} />
          <Route path="/services" element={<Services />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App

// Encapsular a Rota 'Home - /' == Dashboard em abstraction para outras PiMagnifyingGlass.