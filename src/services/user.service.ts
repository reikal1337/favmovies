import { BASE_URL } from "./baseUrl"


export const getAllUsers = async () => {
    const res = await fetch(BASE_URL + "user/all",{
        method: "GET",
        
    })
    
    return await res.json()
}