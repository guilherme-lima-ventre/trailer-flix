import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import style from './Profile.module.css';

function Profile() {
    return (
        <>
            <Header />

            <Banner bannerImage={"favoritos"} height={"200px"}
            ></Banner>

            <Container>
                <section className={style.profile}>
                    <h1>Profile</h1>
                </section>
            </Container>

            <Footer />
        </>
    );
}

export default Profile;