import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import BackgroundImg from "./components/BackgroundImg"
import NavBar from "./components/NavBar"
import { Home, Login, PageNotFound, Profile, Register, Vartotojas } from "./pages"
import { useState } from "react"
import Cookies from "js-cookie"
import { UserProvider } from "./contexts/UserContext"

function App() {
  const [loggedIn, setLoggedIn] = useState(Cookies.get("favMovie_token") != undefined)

  const RouterLayout = () => {
    return (
      <>
        <BackgroundImg />
        <NavBar />
        <main
          className='w-screen h-screen flex flex-col text-white justify-center items-center'>
          <Outlet />
        </main>

      </>
    )

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<PageNotFound />} element={<RouterLayout />} >
        <Route path="/" index element={<Home />} />
        <Route path="/vartotojo/:id" index element={<Vartotojas />} />

        
        {!loggedIn ?
          <>
            <Route path="/prisijungimas" element={<Login />} />
            <Route path="/registracija" element={<Register />} />
          </>
          :
          <>
            <Route path="/profilis" element={<Profile />} />
            <Route path="/kitu" element={<Home />} />
            <Route path="/mano" element={<Home />} />
          </>
        }

        
      </Route>
    )
  )


  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  )
}

export default App
