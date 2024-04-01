import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
    return (
        <> 
            <header className={styles.header}>
                <Link to="/">
                    <span className={styles.title}>TrailerFlix</span>
                </Link>
                <nav className={styles.navigation}>
                    <Link to="/">Home</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;