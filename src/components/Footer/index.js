import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.app}>  
                <h2 className={styles.name}>
                    Guimovies &copy;
                </h2>
                <h2 className={styles.info}>
                    Primeiro App ReactJS desenvolvido por Guilherme Lima Ventre - 2024
                </h2>
            </div>
        </footer>
    );
}

export default Footer;
