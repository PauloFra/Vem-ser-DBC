import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Mirror from './components/Mirror';
import CountProvider from './context/CountContext';
import NameProvider from './context/NameContext';
import Name from './components/Name';
function App() {
  return (
    <div className="App">
      <CountProvider>
        <NameProvider>
          <Counter />
          <hr />
          <Mirror />
          <hr />
          <Name />
        </NameProvider>
      </CountProvider>
    </div>
  );
}

export default App;
