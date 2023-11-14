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

    console.log(favMovies)


  return (
    <div className=" bg-black w-3/5 h-5/6 rounded-3xl bg-main shadow-2xl overflow-y-hidden">
        {loggedIn && 
          <MainNav />
        }
        <div className="p-10 w-full h-full flex items-center justify-center">
          {allUsers.length > 0 && !loggedIn &&
            <AllUsersList allUsers={allUsers} />
          }   
        </div>
        
          {favMovies.length > 0 && loggedIn &&
            <MovieList movies={favMovies} />
          }   
    </div>
  )
}

export default MainContainer