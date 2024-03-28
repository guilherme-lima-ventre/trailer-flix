import styles from "./Banner.module.css"

function Banner({ bannerImage, height }) {
    return (
        <div 
            className={styles.banner}
            style={{ 
                backgroundImage: `url('/images/banner-${bannerImage}.png')`,
                height: `${height}`
            }}    
        ></div>
    );
}

export default Banner;
