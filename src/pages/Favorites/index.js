import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import style from './Favorites.module.css';

function Favorites() {
    return (
        <>
        <Header/>

        <Banner bannerImage={"favoritos"} height={"200px"}></Banner>

        <Container>
            <section className={style.favorites}>
                <h2> Favorites </h2>

                {/* <TrailerList trailers={trailers}></TrailerList> */}
            </section>
        </Container>

        <Footer/>
        </>
    );
}

export default Favorites;
