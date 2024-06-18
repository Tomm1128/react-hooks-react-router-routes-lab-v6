import { useEffect, useState } from "react"

import NavBar from "../components/NavBar"

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((resp) => resp.json())
      .then((directors) => setDirectors(directors))
  })

  const directorsList = directors.map((director) => {
    const moviesList = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })

    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>{moviesList}</ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  )
}

export default Directors
