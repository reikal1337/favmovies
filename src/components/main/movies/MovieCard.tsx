import { FaImdb } from "react-icons/fa" 


type Props = {
    movie: FavMovie
}
const MovieCard = ({ movie }: Props) => {
  return (
    <div className="mb-10 snap-y">
        
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