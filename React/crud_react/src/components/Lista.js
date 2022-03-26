import React from 'react'
import { useContext } from 'react'
import {CrudContext} from '../Context/CrudContext'
export default function Lista() {
    const {users,setUsers ,removerUsuario,atualizarElemento} = useContext(CrudContext);
    
  return (
      <>
       {users.map((element ,index)=>
            <div key={index}>
            
                <p>Nome: {element.nome}</p>
                <p>Email: {element.email}</p> 
                <p>Profissao: {element.profissao}</p>
                <button onClick={()=> removerUsuario(element.idUser) }>Excluir</button>
                <button onClick={()=>atualizarElemento(element.idUser)}>Atualizar</button>
                <br /> 
                <br />
               
            </div>
        )}
      </>
  )
}
