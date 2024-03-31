import style from './TrailerList.module.css';
import Card from '../Card';

function TrailerList({ trailers, emptyHeading}) {

    const trailerCount = trailers.length;
    let heading = emptyHeading;
    if(trailerCount > 0) {
        const noun = trailerCount > 1 ? "Trailers" : "Trailer";
        heading = `${trailerCount} ${noun}`
    }

    return (
        <>
            <h2 className={style.trailers}>{heading}</h2>
            <section className={style.trailers}>
                {
                    trailers.map((trailer) =>
                        <Card 
                            key={trailer.id} 
                            trailerId={trailer.id} 
                            trailerDescription={trailer.description}
                        ></Card>)
                }
            </section>
        </>
        
    );
}

export default TrailerList;
