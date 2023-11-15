import { useContext, useState } from "react";
import MovieCard from "./MovieCard"
import { useSearchParams } from "react-router-dom";
import { deleteFavMovies } from "../../../services/movies.servise";
import Notifications from "../../Notifications";
import { UserContext } from "../../../contexts/UserContext";

type Props = {
  movies: FavMovie[]
  isEditable?: boolean
}

const MovieList = ({ movies, isEditable }: Props) => {
  const [ serachParam ] = useSearchParams()
  const serachQuery = serachParam.get("paieska")?.toLowerCase()
  const orderBy = serachParam.get("ob")
  const [checkedList, setCheckedList ] = useState<string[]>([])
  const [notifications, setNotfications] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const { setUser } = useContext(UserContext);


  const returnSortedMovies = () => {
    if(orderBy === "Az"){
      return movies.sort((a,b) => a.title.localeCompare(b.title))
    }else if (orderBy === "Za"){
      return movies.sort((a,b) => b.title.localeCompare(a.title))
    }
    return movies
  }

  const handleDelete = async () => {
    const confText = `Ar tikrai norit istrinti "${checkedList.length}", filmu?`;
    if (confirm(confText) === true) {
      setNotfications([])
      setLoading(true)
      const res = await deleteFavMovies({ids: checkedList});
      if(res.message){
        setNotfications(res.message)
      }
      if(res.favMovies){
        setNotfications(["Filmai istrinti!"])
        setCheckedList([])
        setUser(prevState =>({
          ...prevState,
          favMovies: res.favMovies
        }))
      }
      setLoading(false)

    }
  }
  return (

    <>
    {notifications.length > 0 &&
        <Notifications messages={notifications}/>
    }
     {isEditable && 
     <div className="flex w-full justify-center items-center">
        <button
          disabled={loading}
          onClick={handleDelete}
          className=" bg-red-900 hover:bg-transparent hover:text-red-900 font-semibold
           text-white py-1 px-3 border hover:border-red-800 border-transparent rounded-3xl
           disabled:bg-gray-400 disabled:cursor-progress disabled:text-red-900 disabled:border-red-800 "
          >
          ISTRINTI pazymetus
        </button>
      </div>
      }
    <div className="w-full h-full pl-20 pr-5 overflow-y-scroll ">
      {returnSortedMovies()
      .filter((movie) =>
       movie.title.toLowerCase()
       .includes(serachQuery !== undefined ? serachQuery : ""))
      .map((movie,i) => {
        return <MovieCard 
          isEditable={isEditable}
          isCheked={checkedList.includes(movie._id)} 
          setChecked={setCheckedList}
          key={movie._id + i} movie={movie}/>
      })
      }
    </div>
    </>
  )
}

export default MovieList