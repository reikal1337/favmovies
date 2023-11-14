import { AiOutlineLogin } from "react-icons/ai"

const NavBar = () => {
  return (
    <div className="w-full h-24 text-white text-xl  flex items-center justify-end">
        
        <div className="bg-main p-5 flex justify-center items-center rounded-bl-3xl">
            <button ><AiOutlineLogin className="btnClose" size={60} /></button>
            <button className="mx-5">Prisijungti</button>
            <button className="mx-5">Registracija</button>
            <button><img className="rounded-full" srcSet="https://robohash.org/testing.jpg?size=80x80" /></button>
        </div>
    </div>
  )
}

export default NavBar