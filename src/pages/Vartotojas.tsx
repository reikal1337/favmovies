import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFavMoviesByUserId } from "../services/movies.servise";
import MovieList from "../components/main/MovieList";

const Vartotojas = () => {
    const { id } = useParams();

    const [usersMovies, setUsersMovies] = useState<FavMovie[]>([])

    useEffect( () => {
      const fetchUsersMovies = async () => {
        if(id){
            const usersMovies = await getFavMoviesByUserId(id)
            setUsersMovies(usersMovies)
        }
        
      }
      fetchUsersMovies()
    },[])
    
      console.log(usersMovies)

  return (
    <div className=" bg-black w-3/5 h-5/6 rounded-3xl bg-main shadow-2xl flex items-start py-10 pl-20 pr-5 overflow-y-hidden  ">
        {usersMovies.length > 0 &&
        <MovieList movies={usersMovies} />
        }
    </div>
  )
}

export default Vartotojas