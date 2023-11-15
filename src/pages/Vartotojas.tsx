import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFavMoviesByUserId } from "../services/movies.servise";
import MovieList from "../components/main/movies/MovieList";
import Search from "../components/main/Search";
import OrderBy from "../components/main/OrderBy";

const Vartotojas = () => {
    const { id } = useParams();
    const [usersMovies, setUsersMovies] = useState<UsersMovies>()

    useEffect( () => {
      const fetchUsersMovies = async () => {
        if(id){
            const usersMovies = await getFavMoviesByUserId(id)
            setUsersMovies(usersMovies)
        }
        
      }
      fetchUsersMovies()
    },[])
    
  return (
    <div className="w-3/5 h-5/6 rounded-3xl bg-main shadow-2xl flex flex-col items-start pr-4 overflow-y-hidden">
      <div className="flex justify-center items-center w-full">
        <h3 className="text-xl mr-10 mt-2">{usersMovies?.username}</h3>
        <Search />
      </div>
      
      <OrderBy />
        {usersMovies != undefined && usersMovies.movies.length > 0 &&
        <MovieList movies={usersMovies.movies} />
        }
    </div>
  )
}

export default Vartotojas