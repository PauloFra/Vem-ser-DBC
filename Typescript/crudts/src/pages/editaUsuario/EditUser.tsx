import React from 'react'
import { useParams } from 'react-router-dom'
function EditUser() {
    const {id} = useParams()
    console.log(id)    
  return (
    <div>EditUser</div>
  )
}

export default EditUser