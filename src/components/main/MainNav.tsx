import BtnLinkBlue from "../buttons/BtnLinkBlue"
import BtnMainNav from "../buttons/BtnMainNav"
import { useLocation } from "react-router-dom"

function MainNav() {

  const { pathname, search } = useLocation()


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
            linkTo={search.includes("?redaguoti=true") ?  "/" : "?redaguoti=true" }
            >
              {search.includes("?redaguoti=true") ?
              "Uzdaryti redagavima"
              :
              "Redaguoti"
              }
          </BtnLinkBlue>
        </div>
    }
    </>
    
  )
}

export default MainNav