import style from './SearchTrailerList.module.css';
import TrailerList from '../../components/TrailerList';
import trailers from '../../json/trailers.json';
import { useState } from 'react';

function filterTrailers(trailers, searchTrailer) {
    return trailers.filter((trailer) =>
        trailer.category.toLowerCase().includes(searchTrailer.toLowerCase()) || 
        trailer.description.toLowerCase().includes(searchTrailer.toLowerCase())
    );
}

function SearchTrailerList() {

    const [searchTrailer, setSearchTrailer] = useState('');
    const filteredTrailers = filterTrailers(trailers, searchTrailer);

    return (
        <section className={style.searchTrailerList}>
            <input
                type="search"
                placeholder="Search Trailer"
                value={searchTrailer}
                onChange={(event) => setSearchTrailer(event.target.value)}
                />
            <TrailerList
                trailers={filteredTrailers}
                emptyHeading={`No Trailers Found for "${searchTrailer}"`}
                />
        </section> 
    );
}

export default SearchTrailerList;