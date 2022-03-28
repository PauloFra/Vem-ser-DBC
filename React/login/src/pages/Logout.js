import React from 'react'
import { useContext } from 'react'
import {ContextLogin} from '../context/Contexto.js'
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const navigate = useNavigate();
    const {Logout ,validaLogin} = useContext(ContextLogin);
   
    
  return (
    <div>
        <h1>Logout</h1>
        <button onClick={Logout}>Logout</button>
        {/* {console.log(validaLogin)}
        {validaLogin && navigate('/login')} */}
       </div>
  )
}
