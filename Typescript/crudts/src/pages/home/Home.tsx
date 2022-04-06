import React from 'react'
import { useContext , useEffect} from 'react'
import { AuthContext } from '../../context/AuthContext'
import { 
  Card,
  Container,
  CardTitle
} from './Home.style'
function Home() {
  const {redirectUser ,handleLogout} = useContext<any>(AuthContext)
  useEffect(()=>{
    redirectUser()
  },[])
  return (
    <Container>
      <Card>
        <CardTitle>Usuarios</CardTitle>
      </Card>
      <Card>
        <CardTitle>Endereço</CardTitle>
      </Card>
      <Card>
        <button onClick={()=> handleLogout() }>Logout</button>
      </Card>
     
    </Container>
  )
}

export default Home