import { useSearchParams } from "react-router-dom"
import UserCard from "./UserCard"


type Props = {
    allUsers: AllUsers[]
}
const AllUsersList = ({ allUsers }: Props) => {
  const [ serachParam ] = useSearchParams()

  const serachQuery = serachParam.get("paieska")?.toLowerCase()
  const orderBy = serachParam.get("ob")

  const returnSortedUsers = () => {
    if(orderBy === "Az"){
      return allUsers.sort((a,b) => a.username.localeCompare(b.username))
    }else if (orderBy === "Za"){
      return allUsers.sort((a,b) => b.username.localeCompare(a.username))
    }
    return allUsers
  }


  return (
    <div className="p-10 w-full h-full flex items-center justify-center">
    {returnSortedUsers()
      .filter((user) =>
      user.username.toLowerCase()
       .includes(serachQuery !== undefined ? serachQuery : ""))
      .map((user,i) => {
        return <UserCard key={user._id + i} user={user} />
      })
      }
    </div>
  )
}

export default AllUsersList