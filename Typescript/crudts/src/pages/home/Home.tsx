import { useContext , useEffect} from 'react'
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
        <CardTitle>
          <h3>Total de usuarios</h3>
        </CardTitle>
      </Card>
      <Card>
        <CardTitle>
          <h3>Total de usuarios</h3>
          <p></p>
        </CardTitle>
      </Card> 
    </Container>
  )
}

export default Home