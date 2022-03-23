import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Inicial from './components/pages/Inicial';

function App() {
  //const [nome,setNome]= useState('');
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Inicial />}/>
      <Route path='/home' element={<Home />} />
      <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
