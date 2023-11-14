import { BASE_URL } from "./baseUrl"

export const register = async (formToSend: AuthUser ) => {
    const res = await fetch(BASE_URL + "auth/registracija",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formToSend)
    })
    return await res.json()
}