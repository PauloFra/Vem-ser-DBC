import {useContext} from 'react'
import { Link } from 'react-router-dom';
import Foto from './Ellipse.png'

import style from './header.module.css';

import { AuthContext } from '../../context/AuthContext';
function Header() {
  const {handleLogout} = useContext<any>(AuthContext)
  
  const {isToken} = useContext<any>(AuthContext)
  return (
    <>
    {isToken &&
    <header>
      <div className={style.ulLogo}>
          <img src={Foto} alt="" />
          <Link to="">DashBoard</Link>
       </div>
        <ul>
            <Link to={'/'}>
              <li>
                Home
              </li>
            </Link>
            <Link to={'/users'}>
              <li>
                Users
              </li>
            </Link>
            <Link to={'/address'}>
              <li>
                Address
              </li>
            </Link>
            <li onClick={()=>handleLogout()}>
               <a >Logout</a>
            </li>
        </ul>
    </header>
    }
    </>
  )
}

export default Header