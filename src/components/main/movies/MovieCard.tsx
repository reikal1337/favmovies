import { FaImdb } from "react-icons/fa" 


type Props = {
    movie: FavMovie
}
const MovieCard = ({ movie }: Props) => {
  return (
    <div className="mb-10 snap-y">
         <input 
            type="checkbox"
            value="" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <h4 className="text-xl font-black mb-1">{movie.title}</h4>
        <div className="flex mb-2 items-center">
        <img className="mr-3" width={100} height={200} srcSet={movie.imageURL} />
            {movie.description &&
                <p className="text-sm justify-center">{movie.description}</p>
            }
        </div>
        {movie.imdbURL &&
                <div className="flex">
                    <a href={movie.imdbURL} target="_blank" rel="noopener noreferrer"
                        className="hover:text-[#deb522] duration-300 m-0 p-0 w-0" >
                    <FaImdb size={25} />
                    </a>
                </div>
        }

    </div>
  )
}

export default MovieCard