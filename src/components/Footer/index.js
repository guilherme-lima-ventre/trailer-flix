import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.app}>  
                <h2 className={styles.name}>
                    TrailerFlix&copy;
                </h2>
                <h2 className={styles.info}>
                    First ReactJS App | developed by Guilherme Ventre | 2024
                </h2>
            </div>
        </footer>
    );
}

export default Footer;
