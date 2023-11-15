import { AiOutlineLogin } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { useState, useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"
import { IoIosHome } from "react-icons/io";
import { getMyUsername } from "../services/user.service"

const NavBar = () => {
  const [loggedIn] = useState(Cookies.get("favMovie_token") != undefined)
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() =>{
    const getUsername = async () => {
     const res = await getMyUsername()
          setUser(prevState => ({
            ...prevState,
            username: res.username
          }))
     }

    if(loggedIn && user.username === ""){
      console.log("Lol")
      getUsername()
    }
  },[user])

  const handleLogOut = () => {
    Cookies.remove("favMovie_token")
    navigate("/")
    window.location.reload();
  }

  return (
    <div className="fixed z-50 top-0 right-0 text-white text-xl flex justify-end">
        <div className="bg-main p-5 flex justify-center items-center rounded-bl-3xl">
          <Link to="/" aria-label="Prisijungti"
              className="mx-5 font-semibold hover:text-gray-400 duration-300"><IoIosHome size={40} /></Link>
          {!loggedIn ?
          <>
            <Link to="/prisijungimas" aria-label="Prisijungti"
            className="mx-5 font-semibold hover:text-gray-400 duration-300">Prisijungti</Link>

            <Link to="/registracija" aria-label="Registracija"
            className="mx-5 font-semibold hover:text-gray-400 duration-300">Registracija</Link>

          </>
          :
          <>
            <button onClick={handleLogOut} aria-label="Atsijungti"><AiOutlineLogin className="btnClose mr-10" size={40} /></button>
            <Link to="/profilis" aria-label="Profilis"><img className="rounded-full border-stone-600 border-2"
            srcSet={`https://robohash.org/${user?.username !== "" ? user?.username : "placeholder"}.jpg?size=60x60`} /></Link>
          </>
          }
           
        </div>
    </div>
  )
}

export default NavBar