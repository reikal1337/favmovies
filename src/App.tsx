import MainContainer from "./components/MainContainer"

function App() {

  return (
    <main
      className='bg-cover bg-center bg-no-repeat w-screen h-screen flex justify-center items-center'
      style={{backgroundImage: "url(./background.jpg)"}}>
      <MainContainer />
    </main>
  )
}

export default App
