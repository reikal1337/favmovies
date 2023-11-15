import MovieCard from "./MovieCard"
import { useSearchParams } from "react-router-dom";

type Props = {
  movies: FavMovie[]
}

const MovieList = ({ movies,  }: Props) => {
  const [ serachParam ] = useSearchParams()
  const serachQuery = serachParam.get("paieska")?.toLowerCase()
  const orderBy = serachParam.get("ob")
  

  const returnSortedMovies = () => {
    if(orderBy === "Az"){
      return movies.sort((a,b) => a.title.localeCompare(b.title))
    }else if (orderBy === "Za"){
      return movies.sort((a,b) => b.title.localeCompare(a.title))
    }
    return movies
  }
  return (

    <>
    <div className="w-full h-full pl-20 pr-5 overflow-y-scroll ">
      {returnSortedMovies()
      .filter((movie) =>
       movie.title.toLowerCase()
       .includes(serachQuery !== undefined ? serachQuery : ""))
      .map((movie,i) => {
        return <MovieCard key={movie._id + i}  movie={movie}/>
      })
      }
    </div>
    </>
  )
}

export default MovieList