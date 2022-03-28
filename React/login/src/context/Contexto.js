import { createContext , useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api.js';

export const ContextLogin = createContext();

function ContextProvider({children}){
    const [token , setToken] = useState('');
    const [validaLogin , setValidaLogin] = useState(false)
    const navigate = useNavigate()
       
        async function ChamarLogin(values){
       try{
        const {data} = await api.post('/auth' , values);
        setToken(data);
        localStorage.setItem('token' , data);  
        setValidaLogin(true);
        navigate('../logout')     
       }
       catch(erro){
           console.log(erro)
       }
    }

    function Logout(){
        localStorage.removeItem('token');
        setValidaLogin(true);
        navigate('../login') 
    }
    return(
        <ContextLogin.Provider value={{ChamarLogin , token , Logout ,validaLogin }}>
            {children}
        </ContextLogin.Provider>
    )

}
export default ContextProvider;