import {FC , createContext , useState , useEffect} from 'react'
import { LoginDTO } from '../modal/LoginDTO'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import { PessoasDTO } from '../modal/PessoasDTO'
export const AuthContext = createContext({})

const AuthProvider:FC<any> = ({children}) => {
    const [isToken , setIsToken] = useState(false)
    const [loading , setLoading] = useState<boolean>(true)
    const [arrayPessoas , setArrayPessoas] = useState<PessoasDTO['pessoas']>([])
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            api.defaults.headers.common['Authorization'] = token
            setIsToken(true)
        }else{
            navigate('/login')
        }
        setLoading(false)
    },[])
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsToken(false)
        navigate('/login')
    }
    const handleLogin = async(user:LoginDTO) =>{
        try{
            const {data} = await api.post('/auth' , user)
            setIsToken(true)
            setLoading(false)
            localStorage.setItem('token',data)
            api.defaults.headers.common['Authorization'] = data
            alert('Logado com sucesso')
            navigate('/')
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    const getInPessoa = async() =>{
        try{
            const {data} = await api.get('/pessoa')
            setArrayPessoas(data)
        }catch(error){
            console.log(error)
        }
    }


    if(loading){
        return(<h1>Loading</h1>)
    }
    return (
    <AuthContext.Provider value={{handleLogin  , handleLogout,isToken,getInPessoa,arrayPessoas}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider