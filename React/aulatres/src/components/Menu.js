import {Link} from 'react-router-dom'

export default function Menu() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/"> Inicial</Link>
            </li>
            <li>
                 <Link to="/Home"> Home</Link>
            </li>
            <li>
                 <Link to="/Contato"> Contato</Link>
            </li>
        </ul>
    </nav>
  )
}
