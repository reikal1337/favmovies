import { useEffect, useState } from "react"
import MainNav from "./MainNav"
import Cookies from "js-cookie"
import { getAllUsers } from "../../services/user.service"
import AllUsersList from "./AllUsersList"
import { getMyFavMovies } from "../../services/movies.servise"
import MovieList from "./MovieList"

const MainContainer = () => {
  
  const [loggedIn] = useState(Cookies.get("favMovie_token") != undefined)
  const [allUsers, setAllUsers] = useState<AllUsers[]>([])
  const [ favMovies, setFavMovies ] = useState<FavMovie[]>([])
  const [serach, setSearch] = useState("")


  useEffect( () => {
    const fetchAllUsrs = async () => {
      const allUsrs = await getAllUsers()
      setAllUsers(allUsrs)
    }

    const fetchfavMovies = async () => {
      const myFavMovies = await getMyFavMovies()
      setFavMovies(myFavMovies)
    }

    
    if(loggedIn){
      fetchfavMovies()
    }

    fetchAllUsrs()
  },[])

  return (
    <div className="w-3/5 h-5/6 rounded-3xl bg-main shadow-2xl  overflow-y-hidden">
        {loggedIn && 
        <>
          <MainNav />
          

        </>
        
        }
        <input 
            type="text"
            value={serach}
            placeholder="Paieska pagal varda..."
            onChange={(e) => setSearch(() => e.target.value)}
            className="text-black bg-gray-400 p-1 rounded-xl mt-2"
          />
          
          {allUsers.length > 0 && !loggedIn &&
            <AllUsersList allUsers={allUsers} />
          }   
        
          
            {favMovies.length > 0 && loggedIn &&
              <MovieList searchQuery={serach} movies={favMovies} />
            }
        
    </div>
  )
}

export default MainContainer