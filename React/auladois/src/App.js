
import './App.css';
import React , {useState , useEffect} from 'react'
import Form from './components/compLearn/Form.js'
import Condiocional from './components/compLearn/Condicional'
function App() {
  // const [val,setVal] = useState(10);
  // useEffect(()=>{
  //   setVal(30)
  // },[]);  
  return (
    <div>
      <Condiocional/>
    </div>
  );
}

export default App;
