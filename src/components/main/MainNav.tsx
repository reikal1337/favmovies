import BtnSmpleBlue from "../buttons/BtnSmpleBlue"
import BtnMainNav from "../buttons/BtnMainNav"

function MainNav() {
  return (
    <>
    <div className="h-24 z-10  w-full font-semibold text-xl">
        <BtnMainNav> Mano </BtnMainNav>
        <BtnMainNav addClass="rounded-tl-none"> Kitu </BtnMainNav>
    </div>
        <BtnSmpleBlue>
          Kurti
        </BtnSmpleBlue>
        <BtnSmpleBlue>
          Redaguoti
        </BtnSmpleBlue>
    </>
    
  )
}

export default MainNav