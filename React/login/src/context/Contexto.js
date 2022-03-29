import { createContext , useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from '../api.js';

export const ContextLogin = createContext();

function ContextProvider({children}){
    const navigate = useNavigate();
    const [pessoas , setPessoas] = useState([])
    const [token , setToken] = useState('');
    const [isLogin , setIsLogin] = useState(false);
    
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
            setPessoas(data)
           
        }
        catch(erro){
            console.log(erro)
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
        return (<div>Loading</div>) 
    }
    return(
        <ContextLogin.Provider value={{ChamarLogin , token , Logout ,redirect ,getPessoa ,pessoas , token}}>
            {children}
        </ContextLogin.Provider>
    )

}
export default ContextProvider;