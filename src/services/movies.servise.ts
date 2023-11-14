import { BASE_URL } from "./baseUrl"
import Cookies from "js-cookie"

export const getFavMoviesByUserId = async (userId: string ) => {
    const res = await fetch(BASE_URL + `movies/${userId}`,{
        method: "GET",
        
    })
    return await res.json()
}

export const getMyFavMovies = async () => {
    const auth = Cookies.get("favMovie_token")
    const res = await fetch(BASE_URL + `movies`,{
        method: "GET",
        headers: {
            Authorization: `Bearer ${auth}`,
        },
        
    })
    return await res.json()
}
