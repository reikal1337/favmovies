import { useSearchParams } from "react-router-dom"
import UserCard from "./UserCard"
import PageBar from "./PageBar"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/user.service"

const AllUsersList = () => {
  const [ serachParam, setSearchParam ] = useSearchParams()
  const [ users, setUsers ] = useState<AllUsers[]>([])
  const [pageMax, setPageMax ] = useState(1)

  const serachQuery = serachParam.get("paieska")?.toLowerCase()
  const orderBy = serachParam.get("ob")
  const currentPage = parseInt(serachParam.get("p") || "1");

  const returnSortedUsers = () => {
    if(orderBy === "Az"){
      return users.sort((a,b) => a.username.localeCompare(b.username))
    }else if (orderBy === "Za"){
      return users.sort((a,b) => b.username.localeCompare(a.username))
    }
    return users
  }

  useEffect(() => {
    const fetchAllUsrs = async () => {
      const allUsersRes: GetAllUsers = await getAllUsers(currentPage)
      console.log(allUsersRes)

      setSearchParam(prevState => {
        prevState.set("p", allUsersRes.page.toString())
        return prevState
      })

      setUsers(allUsersRes.users)
      setPageMax(allUsersRes.pageMax)
    }
    fetchAllUsrs()

  },[serachParam.get("p")])


  return (
    <>
    {users && users.length > 0 && pageMax > 1 &&
      <PageBar page={currentPage} pageMax={pageMax} />
    }
    <div className="p-10 w-full h-full flex flex-wrap items-center justify-around">
    {users.length > 0 ?
    returnSortedUsers()
      .filter((user) =>
      user.username.toLowerCase()
      .includes(serachQuery !== undefined ? serachQuery : ""))
      .map((user,i) => {
        return <UserCard key={user._id + i} user={user} />
      })
      :
      <h3 className="text-gray-600 text-2xl">Nera kitu vartotoju!</h3>
      }
    </div>
    </>

  )
}

export default AllUsersList