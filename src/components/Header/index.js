import styles from "./Header.module.css"

function Header() {
    return (
        <> 
        <header className={styles.header}>
            <span className={styles.title}>Guimovies</span>
            <nav className={styles.navigation}>
                <a href="#">Home</a>
                <a href="#">Watch</a>
                <a href="#">Profile</a>
            </nav>
        </header>
        </>
    )
}

export default Header;