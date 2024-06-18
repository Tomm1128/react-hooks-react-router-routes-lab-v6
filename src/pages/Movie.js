import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

function Movie() {
  const [movie, setMovie] = useState({})
  const [genres, setGenres] = useState([])
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((resp) => resp.json())
      .then((movie) => {
        setMovie(movie)
        setGenres(movie.genres)
      })
  }, [movieId])

  const genresList = genres.map((genre, index) => {
    if (movie.genres.length - 1 === index) {
      return <span key={genre}>{genre}</span>
    } else {
      return <span key={genre}>{genre},</span>
    }
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} min.</p>
        {genresList}
      </main>
    </>
  )
}

export default Movie
