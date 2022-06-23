import axios from 'axios';
import { useEffect, useState } from "react";
import Movie from '../DiscoverMovie/DiscoverMovie';

const MoviesList = () => {
    const apiURL = 'https://api.themoviedb.org/3';
    const [popMovies, setPopMovies] = useState([]);
    const [popularity, setPopularity] = useState([])

    useEffect(() => {
        axios.get(`${apiURL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_tmdbApiKey,
                language: 'es-MX'
            }
        })
        .then(response => {
            console.log(response)
            const movies = response.data.results
            setPopMovies(movies)
            const moviesPopularity = movies.popularity
            setPopularity(moviesPopularity)})
        .catch(err => console.log(err))
    }, [])

    console.log(popMovies)

    // const ordenar = (a, b) => {

    // }
    

    return(
        <main>
            <ul>
                {
                    popMovies.map(movie => <Movie  key={movie.id} {...movie} />)
                }
            </ul>
        </main>
    )
}

export default MoviesList;