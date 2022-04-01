import {React , useEffect ,useContext , useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {ContextLogin} from '../context/Contexto.js'
import { UserContext } from '../context/UserContext.js';

import Loading from '../components/Loading.js';
import moment from 'moment';
import api from '../api.js';
import { useAlert } from 'react-alert'


import Erro from '../components/Erro.js';
import style from './users.module.css'
export default function Logout() {
  const navigate = useNavigate();
  const {redirect} = useContext(ContextLogin);    
  const {GetPessoa , load ,error, pessoas,setArrayPessoas,arrayPessoas} = useContext(UserContext);    
    useEffect(()=>{
        redirect();  
        GetPessoa();
        setArrayPessoas([])
    },[])
    
  
    async function handleDelete(id){
      try{
        const {data} = api.delete(`pessoa/${id}`);
        window.location.reload(false);
        alert('pessoa Deletada')

      }catch(erro){
        console.log(erro);
      }
    }
   const formatCpf = (cpf) => {
      cpf = cpf.toString()
      return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11)
  }
    // Verificar o token antes de logar em cada pagina , api que lista os usuarios na pagina users , deslogar funcional , Header e footer validando o token nos links
    
    function Atualizar(arr){
      navigate(`/create-user/${arr.idPessoa}`);
      setArrayPessoas(arr);
      console.log(arrayPessoas);
    }
    if(load){
      return <Loading />
    }

    if(error){
      return (
      <Erro />    
      );
  }
    return (
    <>
        <h1>Usuarios</h1>
        <Link to={'/create-user'}>Create User</Link>
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
              <button onClick={() => handleDelete(pessoa.idPessoa)}>Deletar</button>
              <button onClick={() =>Atualizar(pessoa) }>Atualizar</button>
          </div>
        ))}
       </div>
       </div>
    </>
  )
}
