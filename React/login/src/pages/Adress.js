import {React , useState , useContext , useEffect} from 'react'
import style from './adress.module.css'
import apiviacep from './apiviacep'
import { ContextLogin } from '../context/Contexto';
function Adress() {
  const {redirect} = useContext(ContextLogin)
  
  useEffect(()=>{
    redirect()
  },[])
  const [dados , setDados] = useState([]);
  const [cep , setCep] = useState('');
  const [bairro , setBairro] = useState('');
  const [ddd , setDdd] = useState('');
  const [localidade , setLocalidade] = useState('');
  const [logradouro , setLogradouro] = useState('');
  const [uf , setUf] = useState('');
  const [numeroCasa , setNumeroCasa] = useState('');
  
  let test = '01001000';
 async function getCep(){
    try{
      const {data} = await apiviacep.get('ws/' + cep + '/json/')
       
      const {bairro , ddd , localidade , logradouro , uf} = data;
      setDados({...dados , bairro:bairro , ddd:ddd , localidade:localidade , logradouro:logradouro , uf:uf}) 
      setBairro(bairro)
      setDdd(ddd)
      setLocalidade(localidade)
      setLogradouro(logradouro)
      setLogradouro(uf)    
    }catch(erro){
      console.log(erro)
    }
  }
  function submitForm(){
    setDados({...dados , numeroDaCasa:numeroCasa});
    if(bairro === '' || numeroCasa === ''){
      alert('Ops! Preencha os campos')
    }else{
      alert('Tudo Certo!')
    } 
  }
  return (

       <div className={style.divFormLocal}>
         <h1>Endereço</h1>
           <form action="" className={style.formLocal} onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="">CEP:</label>
            <input type="text" onChange={(e)=> setCep( e.target.value)}/>
            {/* <input type="text" onChange={(e)=> e.target.value = test}/>  */}
           <button onClick={()=>getCep()}>Buscar por CPF</button>
           <label htmlFor="">Bairro:</label>
           <input type="text" value={bairro} />
           <label htmlFor="">Localidade:</label>
           <input type="text" value={localidade} />
           <label htmlFor="">Logradouro:</label>
           <input type="text" value={logradouro} />
           <label htmlFor="">DDD:</label>
           <input type="text" value={ddd} />
           <label htmlFor="">Numero Da Casa:</label>
           <input type="text" onChange={(e)=>setNumeroCasa(e.target.value)} />
           <button onClick={()=>submitForm()}>Submit</button>
           </form>

       </div>
  
  )
}

export default Adress