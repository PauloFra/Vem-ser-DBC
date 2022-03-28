import { createContext , createElement, useState} from "react";

export const CrudContext = createContext();
let id = 0;
function CrudProvider({ children }){
    
    let count = 1;
    const [users , setUsers] = useState([])
    const [nome , setNome] = useState('')
    const [email , setEmail] = useState('')
    const [profissao , setProfissao] = useState('')

    var isBoolean = false;
   
    function adicionarAoCrud(e){
        e.preventDefault();
        let validaVazio = nome == '' || email == '' || profissao == '';
        let validaNome = nome.split('').some(el => el.toLowerCase('') === el.toUpperCase(''));
        let dominio = email.includes('@dbccompany');
        if(validaVazio || validaNome || !dominio){
             alert('Preecha todos os campos corretamente')
        }
        
        else{        
        
        setUsers([...users, { idUser:id , nome:nome, email:email ,profissao:profissao }]);
        id++;
        console.log(users);      

        }
            
    }
    
   function removerUsuario(idDoUser){
        setUsers(
            users.filter(el=> el.idUser != idDoUser )
        )   
    }
    function atualizarElemento(id){
        let i = users.findIndex(item => item.idUser === id);
        
        let newNome = prompt('Digite o novo nome')
        let newEmail = prompt('Digite o novo email')
        let newProfissao = prompt('Digite a nova profissao')
        users[i] = { idUser:id , nome:newNome, email:newEmail ,profissao:newProfissao };
            
    }
    return(
        <CrudContext.Provider value={{nome , setNome , adicionarAoCrud ,email , setEmail ,profissao , setProfissao ,users,setUsers,removerUsuario ,atualizarElemento}}>
            {children}
        </CrudContext.Provider>
    )
}
export default CrudProvider;
