import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFavMoviesByUserId } from "../services/movies.servise";
import MovieList from "../components/main/movies/MovieList";
import Search from "../components/main/Search";
import OrderBy from "../components/main/OrderBy";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";


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
    <main className="w-11/12 h-5/6 mt-auto sm:w-4/5 lg:w-3/5 rounded-t-3xl  bg-main shadow-2xl flex flex-col items-start pr-4 overflow-y-hidden">
      
      <div className="flex justify-between items-center w-full">
      <Link to="/" className="hover:text-gray-600 duration-300">
          <IoMdArrowRoundBack size={40} />
      </Link>
      <div className="sm:flex-row sm:justify-around w-full flex flex-col-reverse justify-center items-center ">
        <Search addClassToLabel="hidden md:block"/>
        <h3 className="text-xl mr-10 mt-2">{usersMovies?.username}</h3>
      </div>
      </div>
      
      <OrderBy />
        {usersMovies != undefined && usersMovies.movies.length > 0 &&
        <MovieList movies={usersMovies.movies} />
        }
    </main>
  )
}

export default Vartotojas