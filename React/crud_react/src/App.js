import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CrudProvider from './Context/CrudContext';
function App() {
  return (
    <div className="App">
      <CrudProvider>
        <Home />
      </CrudProvider>
    </div>
  );
}

export default App;
