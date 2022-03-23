import style from'./Footer.module.css'
import { Link } from 'react-router-dom';
import face from '../images/facelogo.png'
import git from '../images/gitlogo.png'
import insta from '../images/instalogo.png'
export default function Footer() {
  return (
    <footer>
        <nav>
            <ul>
                <li>
                    <Link to={'/'}><img src={face}></img></Link>
                </li>
                <li>
                     <Link to={'/'}><img src={git}></img></Link>
                </li>
                <li>
                     <Link to={'/'}><img src={insta}></img></Link>
                </li>
            </ul>
        </nav>
    </footer>
  )
}
