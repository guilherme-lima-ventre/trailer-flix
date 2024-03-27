import styles from "./Card.module.css";

function Card({ videoId }, { videoDescription }) {
    return (
        <section className={styles.card}>
            <a 
                href={`https://www.youtube.com/watch?v=${videoId}`}
                rel="noreferrer noopener"
                target="_blank">
                <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                    alt={`${videoDescription}`}/>
            </a>
        </section>
    );
}

export default Card;
