import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/comumItens/Header';
import Footer from './components/comumItens/Footer';
import Perfil from "./components/Perfil/Perfil";
import Contato from "./components/Contato/Contato";
import Repositorios from "./components/Repositorios/Repositorios";
function App() {
  return (
    <div>
        <BrowserRouter >
          <Header /> 
          <Routes>  
          <Route path="/" element={<Perfil />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/repositorios" element={<Repositorios />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
