import logo from './logo.svg';
import Header from './components/header.js';
import Footer  from './components/footer';
import Contato from './components/contato/contato.js'
import About from './components/about/about';
import Home from './components/home/home';


function App() {
  return (
    <div>
        <Header />
        {/* <Contato /> */}
        {/* <About />  */}
        <Home />       
        <Footer />

    </div>
  );
}

export default App;
