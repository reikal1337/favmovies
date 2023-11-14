import { useState } from "react";
import MovieCard from "./MovieCard"
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdRemove  } from "react-icons/io";

type Props = {
  movies: FavMovie[]
  searchQuery?: string
}

const MovieList = ({ movies, searchQuery }: Props) => {

  const [ sortingType, setSortingType] = useState<boolean | null>(null)

  const togleSort = () => {
    if(sortingType === null || sortingType === false){
      setSortingType(() => true)
      movies.sort((a,b) => b.title.localeCompare(a.title))
    }else{
      setSortingType(() => false)
      movies.sort((a,b) => a.title.localeCompare(b.title))
    }
  }
  return (

    <>
    
    <p 
      onClick={togleSort}
      className=" m-2 cursor-pointer font-medium flex justify-start items-center"
      >Pav 
      {sortingType === null ?
        <IoMdRemove size={30} />
        :
        sortingType === false ?
          <IoMdArrowDropdown size={30} />
          :
          <IoMdArrowDropup size={30} />
      }
      </p>
   
    <div className="w-full h-full pt-[100px] py-10 pb-36 pl-20 pr-5 overflow-y-scroll ">
      {movies.filter((movie) =>
       movie.title.toLowerCase()
       .includes(searchQuery ? searchQuery.toLocaleLowerCase() : 
       ""))
      .map( (movie,i) => {
        return <MovieCard key={movie._id + i}  movie={movie}/>
      })
      }
    </div>
    </>
  )
}

export default MovieList