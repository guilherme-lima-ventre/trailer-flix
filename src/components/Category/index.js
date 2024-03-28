import styles from "./Category.module.css"
import trailers from "../../json/trailers.json"

export const categories = [...new Set(trailers.map((trailer) => trailer.category))];

function Category({ category, children }) {
    return (
        <section className={styles.category}>
            <h2> {category} </h2>
            <div>
                {children}                
            </div>
        </section>
    );
}

export default Category;
