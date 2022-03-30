import { createContext , useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from '../api.js';
import Loading from "../components/Loading.js";
import Erro from "../components/Erro.js";

export const ContextLogin = createContext();

function ContextProvider({children}){
    const navigate = useNavigate();
    const [pessoas , setPessoas] = useState([])
    const [token , setToken] = useState('');
    const [isLogin , setIsLogin] = useState(false);
    const [load , setLoad] = useState(true)
    const [error , setError] = useState(false)
    
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token){
            api.defaults.headers.common['Authorization'] = token;
        }
        setIsLogin(true)
    },[])

    
    async function ChamarLogin(values){
        try{
            const {data} = await api.post('/auth' , values);
            setToken(data);
            localStorage.setItem('token' , data);  
            navigate('../users')     
        }
        catch(erro){
            console.log(erro)
            
        }
    }
    async function getPessoa(){
        try {
            const {data} = await api.get('/pessoa');
            setLoad(false)
            setError(false)            
            setPessoas(data)
        }
        catch(erro){
            console.log(erro);
            setLoad(false)
            setError(true)
        }
    }
    function Logout(){
        localStorage.removeItem('token');
        navigate('../login') 
    }

    function redirect(){
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login')
        }
    }
    
    if(!isLogin){
        
        return (
            <Loading />
        );
    }
   
    return(
        <ContextLogin.Provider value={{ChamarLogin , token , Logout ,redirect ,getPessoa ,pessoas , token , load ,error}}>
            {children}
        </ContextLogin.Provider>
    )

}
export default ContextProvider;