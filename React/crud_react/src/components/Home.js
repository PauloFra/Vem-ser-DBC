import React from 'react'
import { useContext } from 'react'
import {CrudContext} from '../Context/CrudContext'
import Lista from './Lista';
import style from './Home.module.css'
export default function Home() {
  
    const {nome , setNome , adicionarAoCrud ,email , setEmail ,profissao , setProfissao ,users} = useContext(CrudContext);
    return ( 
    <div  className={style.divCrud}>
        <h1>CRUD</h1>
        <form onSubmit={adicionarAoCrud}>
        <p>Digite o nome completo</p>
        <input type="text" placeholder='Digite o nome completo' onChange={(e)=> setNome(e.target.value)} /> 
        <p>Digite seu email</p>
        <input type="text" placeholder='Digite seu email'  onChange={(e)=> setEmail(e.target.value)} />
        <p>Digite sua profissão</p>
        <input type="text" placeholder='Digite sua profissão'  onChange={(e)=> setProfissao(e.target.value)}/>
        <input className={style.btn} type="submit" value='Adicionar' />
        </form>
        <Lista />            
    </div>
    
  )
}
