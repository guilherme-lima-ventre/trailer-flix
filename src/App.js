import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import videos from "./json/db.json"

function App() {
  return (
  <>
    <Header />

    <Banner bannerImage={"home"}
    ></Banner>

    <Container>

      <h2> Comédia </h2>
      <section className="cards">

        {
          videos.map((video) => {
            return <Card 
                key={video.id}
                videoId={video.id} 
                videoDescription={video.description} />
          })}
        
      </section>

    </Container>

    <Footer />
  </>
  );
}

export default App;
