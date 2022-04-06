import React from 'react'
import { useContext , useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { 
  Card,
  Container,
  CardTitle
} from './Home.style'
function Home() {
  const {handleLogout} = useContext<any>(AuthContext)
 
  return (
    <Container>
      <Card>
        <CardTitle>Usuarios</CardTitle>
      </Card>
      <Card>
        <CardTitle>Endereço</CardTitle>
      </Card> 
    </Container>
  )
}

export default Home