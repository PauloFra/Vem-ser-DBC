import styles from './header.module.css'
import foto from './images/cogumelo.jpeg'
import Nav from './nav.js'
const Header = () =>{
    return(
        <>
        <header>
            <img src={foto} alt=""/>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, unde.</span>
            <Nav />    
        </header>
        </>
    )
}
export default Header