import { useState } from "react"
import BtnSmpleBlue from "../buttons/BtnSmpleBlue"
import BtnMainNav from "../buttons/BtnMainNav"

function MainNav() {
  const [serach, setSearch] = useState("")

  return (
    <>
    <div className="h-24 w-full font-semibold text-xl">
        <BtnMainNav> Mano </BtnMainNav>
        <BtnMainNav addClass="rounded-tl-none"> Kitu </BtnMainNav>
    </div>
    <div className="m-2">
        <BtnSmpleBlue>
          Kurti
        </BtnSmpleBlue>
        <BtnSmpleBlue>
          Redaguoti
        </BtnSmpleBlue>
        <input 
          type="text"
          value={serach}
          onChange={(e) => setSearch(() => e.target.value)}
          className="text-black bg-gray-400 p-1 rounded-xl"
        />
      </div>
    </>
    
  )
}

export default MainNav