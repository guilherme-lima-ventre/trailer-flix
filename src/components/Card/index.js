import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite-star-on.png";
import iconUnfavorite from "./favorite-star-off.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ trailerId }, { trailerDescription }) {

    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((item) => item === trailerId);
    let icon = isFavorite ? iconFavorite : iconUnfavorite;

    return (
        <section className={styles.card}>
            <Link to={`/watch/${trailerId}`}>
                <img 
                    src={`https://img.youtube.com/vi/${trailerId}/maxresdefault.jpg`} 
                    alt={`${trailerDescription}`}
                    className={styles.coverImage}/>
            </Link>
            <figure className={styles.coverIcon}>
                <img 
                    src={icon} 
                    alt="Favorite Icon Off"
                    onClick={() =>
                        addFavorite(trailerId)}
                    />
            </figure>
        </section>
    );
}

export default Card;
