import React from 'react'
import style from './Contato.module.css'
import {useState} from 'react'
export default function Contato() {
  const [nome , setNome] = useState('');
  const [email , setEmail] = useState('');
  const [empresa , setEmpresa] = useState('');
  const [mensagem , setMensagem] = useState('');  
  function enviarForm(){
    console.log(nome)
    console.log(email)
    console.log(empresa)
    console.log(mensagem)
  }
  return (
    <section>
      <div>
        <h1>Entre em contato comigo ainda hoje </h1>
      </div>
     <div className={style.backGround}>
     <div className={style.formulario}>  
          
          <label htmlFor="">Nome:</label>
          <input type="text" onKeyUp={(e)=>setNome(e.target.value)} />
        
          <label htmlFor="">Email:</label>
          <input type="text" onKeyUp={(e)=>setEmail(e.target.value)}/>
  
          <label htmlFor="">Empresa / Pessoa:</label>
          <input type="text" onKeyUp={(e)=>setEmpresa(e.target.value)}/>
  
          <label htmlFor="">Deixe aqui sua mensagem:</label>
          <textarea cols="30" rows="10" onKeyUp={(e)=>setMensagem(e.target.value)}></textarea>
  
          
          <button onClick={enviarForm()}>Enviar</button>
    </div>
     </div>
    </section>
  )
}
