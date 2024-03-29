import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TrailerList from '../../components/TrailerList';
import style from './Search.module.css';
import trailers from '../../json/trailers.json';

function Search() {
    return (
        <>
            <Header />

            <Banner bannerImage={"assistir"} height={"325px"}
            ></Banner>

            <Container>
                <section className={style.search}>
                    <h1>Search</h1>
                    <TrailerList
                        trailers={trailers}
                        emptyHeading="No trailer found."
                    ></TrailerList>
                </section>
            </Container>

            <Footer />
        </>
    );
}

export default Search;