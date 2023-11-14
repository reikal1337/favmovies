import { useContext, useState } from "react"
import { onlyLettersAndNumbers, partialPasswordCheck } from "../../helpers/validation"
import { login } from "../../services/auth.service"
import Notifications from "../Notifications"
import { useNavigate } from "react-router-dom"
import Cookie from "js-cookie"
import { UserContext } from "../../contexts/UserContext"

const CreateMovieForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [notifications, setNotfications] = useState([])
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState("")

    // @ts-ignore
    const { setUserState } = useContext(UserContext);


    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const passCheck = partialPasswordCheck(password, username)
        if(passCheck === ""){
            const formToSend = {
                username: username,
                password: password,
            }
            setLoading(true)
            setNotfications([])
            const res = await login(formToSend)

            if(res.message){
                setNotfications(res.message)
                setLoading(false)
            }
            if(res.access_token){
                setLoading(false)
                Cookie.set("favMovie_token", res.access_token,{
                    expires: 20 / 60,
                    secure: true,
                })
                setUserState(res.username)
                navigate("/")
            }
        }else{
            setError(passCheck)
        }

       
    }
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(onlyLettersAndNumbers(e.target.value)){
            setUsername(() => e.target.value)
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(() => e.target.value)
    }

  return (
    <>
    {notifications.length > 0 &&
        <Notifications messages={notifications}/>
    }
    <form 
        className="flex flex-col justify-center text-black items-center bg-main p-5 px-7 rounded-xl"
        onSubmit={handleSubmit}>
                <label htmlFor="username" className="text-white font-medium mt-5 mb-1" >Vartotojo vardas:
                </label>
                <input 
                        className="rounded-md px-2 bg-gray-200 "
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Iveskite vartotojo var.."
                        maxLength={25}
                        minLength={4}
                        required
                        /> 

                <label htmlFor="password" className="text-white font-medium mt-5 mb-">Slpatazodis:
                </label>
                <input 
                    className="rounded-md px-2 bg-gray-200 mb-5"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange} 
                    placeholder="Iveskite slaptazodi..."
                    maxLength={100}
                    minLength={6} 
                    required
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