import React from 'react'
import { useContext } from 'react'
import {CrudContext} from '../Context/CrudContext'
import Lista from './Lista';
export default function Home() {
  
    const {nome , setNome , adicionarAoCrud ,email , setEmail ,profissao , setProfissao ,users} = useContext(CrudContext);
    return ( 
    <div>
        <h1>CRUD</h1>
        <form onSubmit={adicionarAoCrud}>
        <input type="text" placeholder='Digite o nome completo' onChange={(e)=> setNome(e.target.value)} /> 
        <br />
        <input type="text" placeholder='Digite seu email'  onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <input type="text" placeholder='Digite sua profissão'  onChange={(e)=> setProfissao(e.target.value)}/>
        <br />
        <input type="submit" value='adicionar' />
        </form>
        <Lista />            
    </div>
    
  )
}
