import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(resp => resp.json())
    .then(movies => setMovies(movies))
  })

  const movieList = movies.map(movie => {
    return <MovieCard title={movie.title}/>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
