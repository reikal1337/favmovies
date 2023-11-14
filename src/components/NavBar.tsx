import { AiOutlineLogin } from "react-icons/ai"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="w-full h-24 text-white text-xl flex items-center justify-end">
        <div className="bg-main p-5 flex justify-center items-center rounded-bl-3xl">
            <button  ><AiOutlineLogin className="btnClose" size={60} /></button>
            <NavLink to="/prisijungimas" className="mx-5 font-semibold hover:text-gray-400 duration-300">Prisijungti</NavLink>
            <NavLink to="registracija" className="mx-5 font-semibold hover:text-gray-400 duration-300">Registracija</NavLink>
            <NavLink to="/profilis"><img className="rounded-full" srcSet="https://robohash.org/testing.jpg?size=80x80" /></NavLink>
        </div>
    </div>
  )
}

export default NavBar