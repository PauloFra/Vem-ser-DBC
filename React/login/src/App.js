import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ContextProvider from './context/Contexto'
import Login from './pages/Login';
import './App.css';
import Logout from './pages/Logout';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
          </ContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
