const Movie = (movie) => {
    // console.log(movie.popularity)

    return(
        <li>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
        </li>
    )
}

export default Movie;