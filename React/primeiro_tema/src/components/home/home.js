import {useState} from 'react'
import style from './home.module.css'
const Home = () =>{
    const validaForm = (e) =>{
        e.preventDefault();
        console.log(`Seu nome:${nome}\n Seu email:${email} \n Seu motivo de contato:${motivo} \n Sua mensagem:${msg}`)
    }
    const[nome , setNome] =  useState('');
    const[email , setEmail] =  useState('');
    const[motivo , setMotivo] =  useState('');
    const[msg , setMsg] =  useState('');
    return(
        <div className={style.divForm}>
            <h1>Cadastro DBC</h1>
        <form onClick={validaForm}>
        <div>
                <label htmlFor="">Digite seu nome completo:</label>
                <input type="text" onChange={(e)=>setNome(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Digite seu e-mail:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Qual o motivo de contato? </label>
                <select name="" id="" onChange={(e)=>setMotivo(e.target.value)}> 
                    <option value="val1" >Entrar no Vem Ser!</option>
                    <option value="val2">Entrar pra equipe DBC</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Sua Mensagem:</label>
                <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setMsg(e.target.value)}></textarea>
                <input type="submit" placeholder="Cadastrar" className={style.btn}/>
            </div>
            
        </form>
    
        </div>
        )
}
export default Home;