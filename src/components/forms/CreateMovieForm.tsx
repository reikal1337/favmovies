import { useContext, useState } from "react"
import { onlyLettersAndNumbers, partialPasswordCheck } from "../../helpers/validation"
import { login } from "../../services/auth.service"
import Notifications from "../Notifications"
import { useNavigate } from "react-router-dom"
import Cookie from "js-cookie"
import { UserContext } from "../../contexts/UserContext"

const CreateMovieForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        imageURL: "",
        imdbURL: "",
        description: "",
    })

    const [notifications, setNotfications] = useState([])
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState("")

    // @ts-ignore
    const { setUserState } = useContext(UserContext);


    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)

       
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
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
                        placeholder="Iveskite vartotojo var.."
                        maxLength={100}
                        minLength={1}
                        required
                        /> 

                <label htmlFor="imageURL" className="text-white font-medium mt-5 mb-">
                    *Posterio url:
                </label>
                <input 
                    className="rounded-md px-2 bg-gray-200 mb-5"
                    type="text"
                    id="imageURL"
                    name="imageURL"
                    value={formData.imageURL}
                    onChange={handleChange} 
                    placeholder="Iveskite slaptazodi..."
                    maxLength={200}
                    minLength={5} 
                    required
                    />

                <label htmlFor="imdbURL" className="text-white font-medium mt-5 mb-">
                    Imdb url:
                </label>
                <input 
                    className="rounded-md px-2 bg-gray-200 mb-5"
                    type="imdbURL"
                    id="imdbURL"
                    name="imdbURL"
                    value={formData.imdbURL}
                    onChange={handleChange} 
                    placeholder="Iveskite slaptazodi..."
                    maxLength={200}
                    minLength={5} 
                    />

                <label htmlFor="description" className="text-white font-medium mt-5 mb-">
                    Aprasymas:
                </label>
                <input 
                    className="rounded-md px-2 bg-gray-200 mb-5"
                    type="description"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange} 
                    placeholder="Iveskite slaptazodi..."
                    maxLength={1}
                    minLength={250} 
                    />
                
                <p className="text-red-600 text-sm text-center">{error}</p>
                <button 
                    type="submit"
                    disabled={loading}
                    className="text-white text-xl font-bold  hover:text-gray-400 duration-300 disabled:cursor-not-allowed disabled:text-gray-700"

                > 
                Prisijungti</button>
            </form>
            </>
  )
}

export default CreateMovieForm