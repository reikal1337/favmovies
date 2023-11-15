type FavMovie = {
    _id: string,
    imageURL: string,
    title: string,
    imdbURL?: string,
    description?: string,
}

type UsersMovies = {
    movies: FavMovie[],
    username: string,
}

type CreateFavMovie = Omit<FavMovie, "_id">