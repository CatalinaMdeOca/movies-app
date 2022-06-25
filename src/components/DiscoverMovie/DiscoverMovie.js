import './DiscoverMovie.css';

const Movie = (movie) => {
    return(
        <div className='movieCard'>
            <img className="movieImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h4>{movie.title}</h4>
            <button className='button'><a href='../MovieDetail/MovieDetail.js' className='link' >Ver más</a></button>
        </div>
    )
}

export default Movie;