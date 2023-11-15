import { BASE_URL } from "./baseUrl"
import Cookies from "js-cookie"

export const getAllUsers = async () => {
    const res = await fetch(BASE_URL + "user/all",{
        method: "GET",
        
    })
    
    return await res.json()
}

export const getMyUsername = async () => {
    const auth = Cookies.get("favMovie_token")
    const res = await fetch(BASE_URL + `user/me`,{
        method: "GET",
        headers: {
            Authorization: `Bearer ${auth}`,
        },
        
    })
    return await res.json()
}

export const changeMyPassword = async (formToSend: NewPassword) => {
    const auth = Cookies.get("favMovie_token")
    const res = await fetch(BASE_URL + `user`,{
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${auth}`,
            "Content-Type": "application/json",

        },
        body: JSON.stringify(formToSend)
    })
    return await res.json()
}