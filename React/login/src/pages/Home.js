import {React , useContext , useEffect} from 'react'
import { ContextLogin } from '../context/Contexto'
function Home() {
    const {redirect} = useContext(ContextLogin)
    useEffect(()=>{
        redirect()
    },[])
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home