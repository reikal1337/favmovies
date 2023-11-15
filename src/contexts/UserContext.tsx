import { createContext, useState , Dispatch, SetStateAction, ReactNode} from "react";


export interface UserContextInterface {
    user: UserStored,
    setUser: Dispatch<SetStateAction<UserStored>>
}

const defaultState = {
    user: {
        username: "",
        favMovies: []
    }
} as UserContextInterface


export const UserContext = createContext(defaultState)

type Props = {
    children: ReactNode
}

export const UserProvider = ({ children }: Props) => {
    const [user, setUser ] = useState<UserStored>({
        username: "",
        favMovies: []
    })
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}