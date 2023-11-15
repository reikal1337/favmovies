import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { passwordCheck } from "../helpers/validation"
import { changeMyPassword } from "../services/user.service"
import Notifications from "../components/Notifications"

const Profile = () => {
  const { user } = useContext(UserContext)


    const [formData, setFormData] = useState({
        oldPassword: "",
        password: "",
        repPassword: "",
    })

    const [notifications, setNotfications] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState("")


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const passCheck = passwordCheck(formData.password, formData.repPassword, user.username)
        if(passCheck === ""){
            const formToSend = {
                oldPassword: formData.oldPassword,
                password: formData.password
            }
            setLoading(true)
            setNotfications([])
            console.log("Sending: ", formToSend)
            const res = await changeMyPassword(formToSend)
            console.log("Log:", res)

            if(res.message){
                setNotfications(res.message)
                setLoading(false)
            }
            if(res.user){
                setNotfications(["Slaptazodis buvo pakeistas!"])
                setError("Slaptazodis buvo pakeistas!")
                setLoading(false)
                setFormData({
                  oldPassword: "",
                  password: "",
                  repPassword: "",
              })
            }
        }else{
            setError(passCheck)
        }

       
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
             [e.target.name]: e.target.value
            }))
    }
  return (
    <main>
      {notifications.length > 0 &&
      <Notifications messages={notifications}/>
      }
      <h1 className="text-7xl font-black flex justify-center items-center text-center text-shadow">
        {user.username}
      </h1>
      <form 
        className="flex flex-col justify-center text-black items-center bg-main p-5 px-7 rounded-xl"
        onSubmit={handleSubmit}>
          <label htmlFor="oldPassword" className="text-white font-medium mt-5 mb-1" >
            Senas slaptazodis:
          </label>
          <input 
              className="rounded-md px-2 bg-gray-200 "
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              placeholder="Iveskite sena slaptaz..."
              maxLength={100}
              minLength={6}
              required
              /> 

          <label htmlFor="password" className="text-white font-medium mt-5 mb-">
            Naujas slpatazodis:
          </label>
          <input 
              className="rounded-md px-2 bg-gray-200"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange} 
              placeholder="Iveskite nauja slaptazodi..."
              maxLength={100}
              minLength={6} 
              required
              />

          <label htmlFor="repPassword" className="text-white font-medium mt-5 mb-1">
            Pakartokite nauja slaptazodi:
          </label>
          <input
              className="rounded-md px-2 bg-gray-200 mb-5"
              type="password"
              id="repPassword"
              name="repPassword"
              value={formData.repPassword}
              onChange={handleChange} 
              placeholder="Pakartokite slaptazodi..."
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
            Keisti
          </button>
      </form>
    </main>
  )
}

export default Profile