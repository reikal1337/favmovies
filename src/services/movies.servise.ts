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

export const createFavMovie = async (formToSend: CreateFavMovie) => {
    const auth = Cookies.get("favMovie_token")
    const res = await fetch(BASE_URL + `movies`,{
        method: "POST",
        headers: {
            Authorization: `Bearer ${auth}`,
            "Content-Type": "application/json",

        },
        body: JSON.stringify(formToSend)

        
    })
    return await res.json()
}

export const deleteFavMovies = async (formToSend: MoviesToDel) => {
    const auth = Cookies.get("favMovie_token")
    console.log("Siunciu: ", formToSend)
    const res = await fetch(BASE_URL + `movies`,{
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${auth}`,
            "Content-Type": "application/json",

        },
        body: JSON.stringify(formToSend)

        
    })
    return await res.json()
}

