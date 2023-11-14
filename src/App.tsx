import BackgroundImg from "./components/BackgroundImg"
import MainContainer from "./components/MainContainer"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
    <BackgroundImg />
    <NavBar />

    <main
      className='w-screen h-screen flex flex-col justify-center items-center'>
      

      <MainContainer />

    </main>
    </>
  )
}

export default App
