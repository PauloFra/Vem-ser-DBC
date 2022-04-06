import React from 'react'
import { useContext , useEffect} from 'react'
import { AuthContext } from '../../context/AuthContext'
function Users() {
  const {redirectUser} = useContext<any>(AuthContext);
  useEffect(()=>{
    redirectUser()
  },[])
  return (
    <div>Users</div>
  )
}

export default Users