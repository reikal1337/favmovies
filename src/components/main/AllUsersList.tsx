import UserCard from "./UserCard"


type Props = {
    allUsers: AllUsers[]
}
const AllUsersList = ({ allUsers }: Props) => {
  return (
    <div className="p-10 w-full h-full flex items-center justify-center">
    {
        allUsers.map((user,i) =>{
          return <UserCard key={user._id + i} user={user} />
        })
    }
    </div>
  )
}

export default AllUsersList