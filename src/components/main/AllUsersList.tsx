import UserCard from "./UserCard"


type Props = {
    allUsers: AllUsers[]
}
const AllUsersList = ({ allUsers }: Props) => {
  return (
    <>
    {
        allUsers.map((user,i) =>{
          return <UserCard key={user._id + i} user={user} />
        })
    }
    </>
  )
}

export default AllUsersList