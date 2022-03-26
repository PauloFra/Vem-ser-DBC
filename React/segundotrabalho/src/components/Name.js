import { useContext } from 'react'
import { NameContext } from '../context/NameContext'

export default function Name() {
    const {name , setName} = useContext(NameContext);
  return (
    <>
    <input type="text" name="" onChange={(e)=>setName(e.target.value)} />
    <h1>{name}</h1>
    </>
    )
}
