import {FC , createContext , useState , useEffect} from 'react'
import { LoginDTO } from '../modal/LoginDTO'
import { useNavigate } from 'react-router-dom'
import api from '../api'
export const AuthContext = createContext({})

const AuthProvider:FC<any> = ({children}) => {
    const [token , setToken] = useState<string>('')
    const [loading , setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(()=>{
        setLoading(false)
    },[])
    const redirectUser = () =>{
        if(localStorage.getItem('token') === null){
            navigate('/login')
        }
       
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    const handleLogin = async(user:LoginDTO) =>{
        try{
            const {data} = await api.post('/auth' , user)
            setToken(data)
            setLoading(false)
            localStorage.setItem('token',data)
            alert('Logado com sucesso')
            console.log(data)
            navigate('/')
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    if(loading){
        return(<h1>Loading</h1>)
    }
    return (
    <AuthContext.Provider value={{handleLogin , redirectUser , handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider