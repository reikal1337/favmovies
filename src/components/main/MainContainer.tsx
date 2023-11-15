import { useContext, useEffect, useState } from "react"
import MainNav from "./MainNav"
import Cookies from "js-cookie"
import { getAllUsers } from "../../services/user.service"
import AllUsersList from "./AllUsersList"
import { getMyFavMovies } from "../../services/movies.servise"
import MovieList from "./movies/MovieList"
import Search from "./Search"
import OrderBy from "./OrderBy"
import { useLocation } from "react-router-dom"
import PopUp from "../PopUp"
import CreateMovieForm from "../forms/CreateMovieForm"
import { UserContext } from "../../contexts/UserContext"


const MainContainer = () => {
  
  const [loggedIn] = useState(Cookies.get("favMovie_token") != undefined)
  const [allUsers, setAllUsers] = useState<AllUsers[]>([])

  const { user, setUser } = useContext(UserContext);

  const { pathname, search } = useLocation()

  useEffect( () => {
    const fetchAllUsrs = async () => {
      const allUsrs = await getAllUsers()
      setAllUsers(allUsrs)
    }

    const fetchfavMovies = async () => {
      const myFavMovies = await getMyFavMovies()
      setUser(prevState => ({
        ...prevState,
        favMovies: myFavMovies
      }))
    }

    
    if(loggedIn && user.favMovies.length === 0){
      fetchfavMovies()
    }

    fetchAllUsrs()
  },[])

  return (
    <main className="w-3/5 h-5/6 mt-[105px]  rounded-3xl bg-main shadow-2xl flex flex-col items-start overflow-y-hidden">
      <div className="w-full">
          {loggedIn && (pathname === "/" || pathname === "/kitu") &&
            <MainNav />
          }
          <Search />
          <OrderBy />
        </div>
        {allUsers.length > 0 && (!loggedIn || pathname === "/kitu") &&
          <AllUsersList allUsers={allUsers} />
        } 
        {loggedIn && search === "?kurti=true" &&
         <PopUp closeLink={"/"}>
          <CreateMovieForm />
        </PopUp>}
      
        
        {user.favMovies.length > 0 && loggedIn && pathname === "/" &&
          <MovieList 
            isEditable={search.includes("?redaguoti=true") ? true : false}
            movies={user.favMovies} />
        }
      </main>
        
  )
}

export default MainContainer