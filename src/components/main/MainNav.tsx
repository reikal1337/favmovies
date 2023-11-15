import BtnLinkBlue from "../buttons/BtnLinkBlue"
import BtnSmpleBlue from "../buttons/BtnLinkBlue"
import BtnMainNav from "../buttons/BtnMainNav"
import { Link, useLocation } from "react-router-dom"

function MainNav() {

  const { pathname } = useLocation()


  return (
    <>
    <div className="h-24 z-10 w-full font-semibold text-xl flex">
        <BtnMainNav toLink="/"  > Mano </BtnMainNav>
        <BtnMainNav toLink="/kitu" addClass="rounded-tl-none"> Kitu </BtnMainNav>
    </div>
    {pathname != "/kitu" &&
      <div className="mt-2">
          <BtnLinkBlue
            linkTo="?kurti=true"
            >
            Kurti
          </BtnLinkBlue>
          <BtnLinkBlue
            linkTo="?red=true"
          >  
            Redaguoti
          </BtnLinkBlue>
        </div>
    }
    </>
    
  )
}

export default MainNav