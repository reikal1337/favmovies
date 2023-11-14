import { useState } from "react"
import MainNav from "./MainNav"
import Cookies from "js-cookie"

const MainContainer = () => {
  
  const [loggedIn, setLoggedIn] = useState(Cookies.get("favMovie_token") != undefined)


  return (
    <div className=" bg-black w-3/5 h-5/6 rounded-3xl bg-main shadow-2xl">
        {loggedIn && 
          <MainNav />
        }
        <div className="p-10">
            <h1>Test</h1>
        </div>
    </div>
  )
}

export default MainContainer