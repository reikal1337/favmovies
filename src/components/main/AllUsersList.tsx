import { useSearchParams } from "react-router-dom"
import UserCard from "./UserCard"
import PageBar from "./PageBar"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/user.service"

const AllUsersList = () => {
  const [ serachParam, setSearchParam ] = useSearchParams()
  const [ users, setUsers ] = useState<AllUsers[]>([])
  const [pageMax, setPageMax ] = useState(1)
  const [userCount, setUserCount ] = useState("0")


  const serachQuery = serachParam.get("paieska")?.toLowerCase() || ""
  const orderBy = serachParam.get("ob") || ""
  const currentPage = parseInt(serachParam.get("p") || "1");

  useEffect(() => {
    
    fetchAllUsers()
  },[ serachParam.get("p"),serachParam.get("ob")])


  const fetchAllUsers = async () => {
    const allUsersRes: GetAllUsers = await getAllUsers({
      p: currentPage.toString(),
      paieska: serachQuery,
      ob: orderBy,
    })

    setSearchParam(prevState => {
      prevState.set("p", allUsersRes.page.toString())
      return prevState
    })
    setUserCount(allUsersRes.userCount)
    setUsers(allUsersRes.users)
    setPageMax(allUsersRes.pageMax)
  }


 
  return (
    <>
    <div className="flex justify-center items-center w-full mb-5">
      <button 
        className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1 px-3 border border-blue-800 hover:border-transparent rounded-3xl" 
        onClick={() => fetchAllUsers()}
      > Paieska </button>
    </div>
    {users && users.length > 0 &&
      <>
      <h3 className="flex justify-center items-center w-full"
        >Vartotoju: {userCount}</h3>
        {pageMax > 1 &&
          <PageBar page={currentPage} pageMax={pageMax} />
        }
      </>
    }
    
    <div className="w-full h-full flex flex-wrap items-center justify-around overflow-y-auto ">
    {users.length > 0 ?
      users
      .map((user,i) => {
        return <UserCard key={user._id + i} user={user} />
      })
      :
      <h3 className="text-gray-600 text-2xl">Nera jokiu vartotoju!</h3>
      }
    </div>
    </>

  )
}

export default AllUsersList