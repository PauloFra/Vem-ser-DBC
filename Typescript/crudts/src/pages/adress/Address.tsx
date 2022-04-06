import React from 'react'
import { useContext , useEffect} from 'react'
import { AuthContext } from '../../context/AuthContext'

function Address() {
  const {handleLogout} = useContext<any>(AuthContext)
  // useEffect(()=>{
  //   redirectUser()
  // },[])
  return (
    <div>Address</div>
  )
}

export default Address