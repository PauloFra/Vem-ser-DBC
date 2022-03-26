import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../context/CountContext'
export default function Mirror() {
    const {count} = useContext(CountContext)
    return (
    <h1>Mirror:{count}</h1>
  )
}
