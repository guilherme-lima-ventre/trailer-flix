import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TrailerList from '../../components/TrailerList';
import { useFavoriteContext } from '../../contexts/Favorites';
import style from './Favorites.module.css';
import trailers from '../../json/trailers.json';

function Favorites() {

    const { favorite } = useFavoriteContext();
    const trailersFavorites = trailers.filter((trailer) => favorite.includes(trailer.id));

    return (
        <>
        <Header/>

        <Banner bannerImage={"favoritos"} height={"200px"}></Banner>

        <Container>
            <section>
                <h2> Favorites </h2>
                <TrailerList
                    trailers={trailersFavorites}
                    emptyHeading={"You don't have any favorite yet"}></TrailerList>
            </section>
        </Container>

        <Footer/>
        </>
    );
}

export default Favorites;
