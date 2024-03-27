import styles from "./Banner.module.css"

function Banner({ bannerImage }) {
    return (
        <div 
            className={styles.banner}
            style={{ 
                backgroundImage: `url('/images/banner-${bannerImage}.png')`
            }}    
        ></div>
    );
}

export default Banner;
