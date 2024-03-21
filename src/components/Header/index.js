import styles from "./Header.module.css"

function Header() {
    return (
        <> 
        <header className={styles.header}>
            <span className={styles.title}>Guilherme Lima Ventre</span>
            <nav className={styles.navigation}>
                <a href="#">Página Inicial</a>
                <a href="#">Sobre Mim</a>
                <a href="#">Minha Experiência</a>
            </nav>
        </header>
        </>
    )
}

export default Header;