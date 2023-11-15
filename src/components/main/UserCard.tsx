import { NavLink } from "react-router-dom"

type Props = {
    user: AllUsers
}

const UserCard = ({ user }: Props) => {
  return (
    
    <NavLink className="flex justify-center items-center hover:bg-white hover:bg-opacity-5 p-3 rounded-xl duration-300"
     to={`/vartotojo/${user._id}`}>
        <img className="rounded-full border-stone-600 border-2 mr-5" alt={`${user.username} Avatar`} src={`https://robohash.org/${user.username}.jpg?size=100x100`} />
        <p className="text-2xl font-extrabold">{user.username}</p>
    </NavLink>
        

  )
}

export default UserCard