import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import trailers from "../../json/trailers.json"
import Category, { categories } from "../../components/Category";

function Home() {

  return (
  <>
    <Header />

    <Banner bannerImage={"home"} height={"325px"}
    ></Banner>

    <Container>

      {
        categories.map((category, index) => {
          return (
            <Category category={category} key={index}>
              {trailers
              .filter(trailer => trailer.category === category)
              .map((trailer) => {
                return <Card 
                    key={trailer.id}
                    trailerId={trailer.id} 
                    trailerDescription={trailer.description} />
              })}
            </Category>
          )
        })
      }

    </Container>

    <Footer />
  </>
  );
}

export default Home;
