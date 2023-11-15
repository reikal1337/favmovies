import { useContext, useState } from "react"
import Notifications from "../Notifications"
import { UserContext } from "../../contexts/UserContext"
import { createFavMovie } from "../../services/movies.servise"

const CreateMovieForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        imageURL: "",
        imdbURL: "",
        description: "",
    })

    const [notifications, setNotfications] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

     const { setUser } = useContext(UserContext);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setNotfications([])
        const formToSend: CreateFavMovie = {
            title: formData.title,
            imageURL: formData.imageURL,
            imdbURL: formData.imdbURL,
            description: formData.description
        } 

        if(formToSend.description === ""){
            delete formToSend.description
        }
        if(formToSend.imdbURL === ""){
            delete formToSend.imdbURL
        }
        console.log("Siunciu: ", formToSend)

        const res = await createFavMovie(formToSend)
        if(res.message){
            setNotfications(res.message)
        }
        if(res.favMovies){
            setNotfications(["Sukurtas ir pridetas naujas filmas!"])
            setFormData({
                title: "",
                imageURL: "",
                imdbURL: "",
                description: "",
            })
            setUser(prevState => ({
                ...prevState,
                favMovies: res.favMovies
            }))
        }
        setLoading(false)

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleDescriptionChange = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prevState => ({
            ...prevState,
            description: e.target.value
        }))
    }

  return (
    <>
    {notifications.length > 0 &&
        <Notifications messages={notifications}/>
    }
    <form 
        className="flex flex-col justify-center text-black items-center bg-main p-5 px-7 rounded-xl"
        onSubmit={handleSubmit}>
                <label htmlFor="title" className="text-white font-medium mt-5 mb-1" >
                    *Filmo avadinimas:
                </label>
                <input 
                    className="rounded-md px-2 bg-gray-200 "
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Iveskite filmo pavadi..."
                    maxLength={100}
                    minLength={1}
                    required
                    /> 

                <label htmlFor="imageURL" className="text-white font-medium mt-5 ">
                    *Posterio url:
                </label>
                <input 
                    className="rounded-md px-2 bg-gray-200 "
                    type="text"
                    id="imageURL"
                    name="imageURL"
                    value={formData.imageURL}
                    onChange={handleChange} 
                    placeholder="Iveskite posterio/img url..."
                    maxLength={200}
                    minLength={5} 
                    required
                    />

                <label htmlFor="imdbURL" className="text-white font-medium mt-5 ">
                    IMDb url:
                </label>
                <input 
                    className="rounded-md px-2 bg-gray-200 "
                    type="text"
                    id="imdbURL"
                    name="imdbURL"
                    value={formData.imdbURL}
                    onChange={handleChange} 
                    placeholder="Iveskite imdb..."
                    maxLength={200}
                    minLength={5} 

                    />

                <label htmlFor="description" className="text-white font-medium mt-5 mb-">
                    Aprasymas:
                </label>
                <textarea 
                    className="rounded-md px-2 bg-gray-200 mb-5 resize-none"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleDescriptionChange} 
                    placeholder="Prasykite aprasyma..."
                    rows={7}
                    minLength={250} 
                    />
                
                <button 
                    type="submit"
                    disabled={loading}
                    className="text-white text-xl font-bold  hover:text-gray-400 duration-300 disabled:cursor-not-allowed disabled:text-gray-700"

                > 
                Sukurti</button>
            </form>
            </>
  )
}

export default CreateMovieForm