import { AiOutlineLogin } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import Cookies from "js-cookie"
import { useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const NavBar = () => {

  const [loggedIn, setLoggedIn] = useState(Cookies.get("favMovie_token") != undefined)
  //@ts-ignore
  const { userState } = useContext(UserContext);
  console.log()

  const handleLogOut = () => {
    Cookies.remove("favMovie_token")
    window.location.reload();
  }

  return (
    <div className="w-full h-[120px}] z-50 fixed text-white text-xl flex justify-end">
        <div className="bg-main p-5 flex justify-center items-center rounded-bl-3xl">
          {!loggedIn ?
          <>
            <NavLink to="/prisijungimas" aria-label="Prisijungti"
            className="mx-5 font-semibold hover:text-gray-400 duration-300">Prisijungti</NavLink>

            <NavLink to="/registracija" aria-label="Registracija"
            className="mx-5 font-semibold hover:text-gray-400 duration-300">Registracija</NavLink>

          </>
          :
          <>
            <button onClick={handleLogOut} aria-label="Atsijungti"><AiOutlineLogin className="btnClose mr-10" size={60} /></button>
            <NavLink to="/profilis" aria-label="Profilis"><img className="rounded-full"
            srcSet={`https://robohash.org/${userState ? userState : "placeholder"}.jpg?size=80x80`} /></NavLink>
          </>
          }
           
        </div>
    </div>
  )
}

export default NavBar