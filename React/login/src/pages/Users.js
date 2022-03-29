import {React , useEffect} from 'react'
import { useContext } from 'react'
import {ContextLogin} from '../context/Contexto.js'
import { useNavigate } from "react-router-dom";
import moment from 'moment';
export default function Logout() {
    const {Logout,redirect ,getPessoa ,pessoas} = useContext(ContextLogin);
    
    useEffect(()=>{
        redirect();
    },[])
    getPessoa();
    console.log(pessoas)
    
    

   const formatCpf = (cpf) => {
      cpf = cpf.toString()
      return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11)
  }
    // Verificar o token antes de logar em cada pagina , api que lista os usuarios na pagina users , deslogar funcional , Header e footer validando o token nos links
    return (
    <div>
        <h1>Logout</h1>
        <button onClick={Logout}>Logout</button>
        {pessoas.map(pessoa =>(
          <div key={pessoa.idPessoa}>
              <h2>{pessoa.nome}</h2>
              <p>{pessoa.email}</p>
              <p>{formatCpf(pessoa.cpf)}</p>
              <p>{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
          </div>
        ))}
       </div>
  )
}
