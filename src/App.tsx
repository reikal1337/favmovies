import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import BackgroundImg from "./components/BackgroundImg"
import NavBar from "./components/NavBar"
import { Home, Login, PageNotFound, Register } from "./pages"

function App() {

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
        <Route path="/prisijungimas" element={<Login />} />
        <Route path="/registracija" element={<Register />} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
