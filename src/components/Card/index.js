import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ trailerId }, { trailerDescription }) {
    return (
        <section className={styles.card}>
            <Link to={`/watch/${trailerId}`}>
                <img 
                    src={`https://img.youtube.com/vi/${trailerId}/maxresdefault.jpg`} 
                    alt={`${trailerDescription}`}/>
            </Link>
        </section>
    );
}

export default Card;
