import {React , useEffect ,useContext , useState} from 'react'
import {ContextLogin} from '../context/Contexto.js'
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading.js';
import moment from 'moment';
import Erro from '../components/Erro.js';
import style from './users.module.css'
export default function Logout() {
    const {redirect ,getPessoa ,pessoas , load ,error} = useContext(ContextLogin);    
    useEffect(()=>{
        redirect();  
        getPessoa();
    },[])
   
    console.log(pessoas)

    

   const formatCpf = (cpf) => {
      cpf = cpf.toString()
      return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11)
  }
    // Verificar o token antes de logar em cada pagina , api que lista os usuarios na pagina users , deslogar funcional , Header e footer validando o token nos links
    if(load){
      return <Loading />
    }
    console.log(error)
    if(error){
      return (
      <Erro />    
      );
  }
    return (
    <>
        <h1>Usuarios</h1>
        <div className={style.divContent}>
        <div className={style.divDasPessoas}> 
        {pessoas.map(pessoa =>(
          <div key={pessoa.idPessoa} className={style.divPessoa}>
              <div className={style.bgDaPessoa}>
                <h2>{pessoa.nome}</h2>
              </div>
              <p><strong>Email: </strong> {pessoa.email}</p>
              <p><strong>CPF: </strong>{formatCpf(pessoa.cpf)}</p>
              <p><strong>Data de Nascimento: </strong> {moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
          </div>
        ))}
       </div>
       </div>
    </>
  )
}
