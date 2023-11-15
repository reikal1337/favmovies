type AllUsers = {
    _id: string,
    username: string,
}

type UserStored = {
    username: string,
    favMovies: FavMovie[] | never[] 
}

type NewPassword = {
    oldPassword: string,
    password: string,
}