import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
       <Link to={'/'}>Paulo.</Link>
        <nav>
            <ul>
                <li>
                   <Link to={'/'}>Perfil</Link>
                </li>
                <li>
                   <Link to={'/repositorios'}>Repositorios</Link>
                </li>
                <li>
                   <Link to={'/contato'}>Contato</Link>
                </li>
            </ul>
        </nav>
    </header>  
    )
}
