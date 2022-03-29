import React from 'react'
import {Link} from 'react-router-dom'
function NavMenu() {
    const token = localStorage.getItem('token');
  return (
        <>
            <nav>
               { token ?
                <>
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>Users</Link>
                </>
                :
                <Link to={'/login'}>login</Link>}
            </nav>
        </>
  )
}

export default NavMenu