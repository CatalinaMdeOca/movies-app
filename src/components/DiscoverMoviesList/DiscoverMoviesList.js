import axios from 'axios';
import { useEffect, useState } from "react";
import Movie from '../DiscoverMovie/DiscoverMovie';
import './DiscoverMoviesList.css';

const MoviesList = () => {
    const apiURL = 'https://api.themoviedb.org/3';
    const [popMovies, setPopMovies] = useState([]);
    const [input, setInput] = useState('')

    const getMovies = async (input) => {
        const url = input ? 'search' : 'discover'
        await axios.get(`${apiURL}/${url}/movie`, {
            params: {
                api_key: process.env.REACT_APP_tmdbApiKey,
                language: 'es-MX',
                query: `${input ? input : null}`
            },
        })
        .then(response => {
            const movies = response.data.results
            setPopMovies(movies)})
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovies()
    }, [])

    const searchMovies = (e) => {
        e.preventDefault()
        getMovies(input)
    }

    return(
        <div>
            <nav className='navbar'>
                <h1 className='h1'>TMDB APP</h1>
                <form onSubmit={((e) => {searchMovies(e)})} className='form' >
                    <input type='text' placeholder='Buscar...' className='searchInput' onChange={((e) => {setInput(e.target.value)})} />
                    <button className='searchButton' type='submit' >
                        <img className='icon' 
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUJJREFUSEu9le0xBEEURc9GQAhEgAzIgAjIABmQARmQgQwQARnYEIiAOlWv1avR3TO7NWOq9sdOd9/z+r6PWbHws1pYnx5gD7gEjoHDCOQdeAHugfWU4FqAuxDvabjnegxSAxjlQRx8BBTynY83uQLO042OepAhoET+FdYU4aGGIK3aCbuEVp8M0POP2GVULfEiJOQt/uy3cpIBJXoT2IxoEOZD2NU8kwHF+ynRD2/h2WouMuA7Tm3aG91zcwEsit1aluey6DWq7g/jX5O8bZlqjyVbHR2tRvsETjq9oOBz+H4L3ExptLInjwrr3BrPo8IBeJEEXTMYg+rmIC+ODTttcc9pzK0mZGxc29GOa4efogr5U1zPLU1nkutVyKZNVXOhC5kDIDRDzoCnEslcgALRzl9xX84JGP0e9D5MW68tfoMfCXxMGRHr0pcAAAAASUVORK5CYII=" 
                            alt="search icon" />
                    </button>
                </form>
            </nav>
            <main className='main'>
                <section className='moviesList'>
                    {
                        popMovies.map(movie => <Movie  key={movie.id} {...movie} />)
                    }
                </section>
            </main>
        </div>
    )
}

export default MoviesList;