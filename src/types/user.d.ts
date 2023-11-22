type AllUsers = {
    _id: string,
    username: string,
}

type GetAllUsers = {
    users: AllUsers[],
    page: number,
    pageMax: number,
}

type UserStored = {
    username: string,
    favMovies: FavMovie[] | never[] 
}

type NewPassword = {
    oldPassword: string,
    password: string,
}

type UserReq = {
    p?: string,
    paieska?: string,
    ob?: string,
}