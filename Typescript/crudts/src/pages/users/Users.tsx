
import { useContext , useEffect} from 'react'
import { AuthContext } from '../../context/AuthContext'
import { PessoasDTO } from '../../modal/PessoasDTO';
import ListaUsers from '../../components/ListaUsers/ListaUsers';
function Users() {
  const {getInPessoa , arrayPessoas} = useContext<any>(AuthContext);
  useEffect(()=>{
    getInPessoa()
  },[])
  console.log(arrayPessoas)
  return (
  <div>
    <ListaUsers pessoas={arrayPessoas}/> 
  </div>
  )
}

export default Users