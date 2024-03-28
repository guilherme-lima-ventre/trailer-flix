import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PageNotFound from '../../pages/PageNotFound';
import style from './Watch.module.css';
import trailers from '../../json/trailers.json'

function Watch() {
    const params = useParams();
    const trailer = trailers.find(
        (trailer) => {
            return (
                trailer.id === params.id
            )});
    
    if(!trailer) { return <PageNotFound/>;}

    return (
        <>
            <Header />

            <Banner bannerImage={"assistir"} height={"260px"}>
            </Banner>

            <Container>
                <iframe 
                    width="860" 
                    height="480" 
                    src={`https://www.youtube.com/embed/${trailer.id}`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
            </Container>

            <Footer />
        </>
    );
}

export default Watch;