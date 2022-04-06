import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { useContext } from 'react'
import Header from './components/header/Header'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Users from './pages/users/Users'
import Address from './pages/adress/Address'
import NotFound from './pages/notFound/NotFound'
import { AuthContext } from './context/AuthContext'
import AuthProvider from './context/AuthContext'


function routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div style={{display:'flex'}}>
          <Header /> 
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/users' element={<Users />} />
              <Route path='/address' element={<Address />} />
            </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default routes