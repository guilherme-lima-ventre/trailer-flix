import Footer from '../../components/Footer';
import Header from '../../components/Header';
import style from './PageNotFound.module.css';
import pageNotFound from './page-not-found.png';

function PageNotFound() {
    return (
        <>
            <Header/>
            <section className={style.pageNotFound}>
                <h2 >Ops! Page Not Found.</h2>
                <img src={pageNotFound} alt="Page not found logo"/>
            </section>
            <Footer/>
        </>
    );
}

export default PageNotFound;