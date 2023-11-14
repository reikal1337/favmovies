import MainNav from "./MainNav"

const MainContainer = () => {
  return (
    <div className=" bg-black w-2/3 h-5/6 rounded-3xl  text-white bg-main shadow-2xl">
        <MainNav />
        <div className="p-10">
            <h1>Test</h1>
        </div>
    </div>
  )
}

export default MainContainer