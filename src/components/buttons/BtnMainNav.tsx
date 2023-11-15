import { NavLink } from "react-router-dom"

type Props = {
    children: string,
    addClass?: string
    toLink: string
}

const BtnMainNav = ({ children, addClass, toLink }: Props) => {
  return (
    <NavLink
    to={toLink} 
    className={`bg-white bg-opacity-5 rounded-tl-3xl w-1/2 h-full flex justify-center items-center hover:bg-opacity-10 duration-300 ${addClass} `}>
          {children}
    </NavLink>

  )
}

export default BtnMainNav