import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ContextProvider from './context/Contexto'
import Login from './pages/Login';
import './App.css';
import Logout from './pages/Users';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Adress from './pages/Adress';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/users' element={<Logout />} />
            <Route path='/adress' element={<Adress />} />
          </Routes>
          <Footer />
          </ContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
