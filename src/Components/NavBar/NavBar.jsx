import styles from './NavBar.module.css';
import { BsBasket } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";


const NavBar = (props) => {
    return (  
        <header className={`${styles.navBar}`}>
            <span className={`${styles.totalItems}`}>{props.totalItems} </span>
            <h2 className>Shopping Project</h2>
            <span className={`${styles.basketIcon}`}><BsBasket /></span> 
        </header>
    );
}
 
export default NavBar;