import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchTrailerList from '../../components/SearchTrailerList';
import style from './Search.module.css';

function Search() {
    return (
        <>
            <Header />

            <Banner bannerImage={"assistir"} height={"325px"}
            ></Banner>

            <Container>
                <section className={style.search}>
                    <h2>Search</h2>
                    <SearchTrailerList />
                </section>
            </Container>

            <Footer />
        </>
    );
}

export default Search;