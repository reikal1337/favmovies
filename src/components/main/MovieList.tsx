import MovieCard from "./MovieCard"

type Props = {
  movies: FavMovie[]
}

const MovieList = ({ movies }: Props) => {
  console.log("list: ", movies)
  return (
    <div className="w-full h-full pt-[100px] overflow-y-scroll ">
      {movies.map( (movie,i) => {
        return <MovieCard key={movie._id + i}  movie={movie}/>
      })
      }
    </div>
  )
}

export default MovieList