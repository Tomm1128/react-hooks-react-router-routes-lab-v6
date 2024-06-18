import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((resp) => resp.json())
      .then((actors) => setActors(actors))
  })

  const actorsList = actors.map((actor) => {
    const moviesList = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })

    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>{moviesList}</ul>
      </article>
    )
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{actorsList}</main>
    </>
  )
}

export default Actors
