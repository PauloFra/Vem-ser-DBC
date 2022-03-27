import React from 'react'
import { useContext } from 'react'
import {CrudContext} from '../Context/CrudContext'
import style from './Lista.module.css'
export default function Lista() {
    const {users,setUsers ,removerUsuario,atualizarElemento} = useContext(CrudContext);
    
  return (
      <>
      <h2>Usuarios Cadastrados:</h2>
       {users.map((element ,index)=>
            <div key={index} className={style.divUser}>
            
                <p><strong>Nome: </strong>{element.nome}</p>
                <p><strong>Email: </strong>{element.email}</p> 
                <p><strong>Profissão: </strong>{element.profissao}</p>
                <button onClick={()=> removerUsuario(element.idUser) }>Excluir</button>
                <button onClick={()=>atualizarElemento(element.idUser)}>Atualizar</button>
                <br /> 
                <br />
               
            </div>
        )}
      </>
  )
}
