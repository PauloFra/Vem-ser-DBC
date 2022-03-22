import {useState} from 'react'
import style from './Form.module.css'
const Form = () =>{

    const cadastrarUsuario = (e) =>{
        e.preventDefault();
        console.log(`Seu Login é ${login} e senha é ${senha}`)
    }
    const [login,setLogin] = useState('');
    
    const [senha,setSenha] = useState('');
   
return(
    <div className={style.alinhamentoDefault}>
        <h1>Meu formulário</h1>
        <h1>Meu nome é {login}</h1>
        <form onClick={cadastrarUsuario}>
        <div>
                <input type="text" placeholder="Digite Seu nome" 
                onChange={(e)=>setLogin(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder='Digite Sua senha'
                onChange={(e)=>setSenha(e.target.value)}/>
            </div>
            <div>
                <input type="submit" placeholder="Cadastrar" />
            </div>
        </form>      
    </div>
);
}
export default Form;