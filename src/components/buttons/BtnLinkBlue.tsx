import { Link } from "react-router-dom"

type Props = {
    children: string
    linkTo: string,
    
}
const BtnLinkBlue = ({ children, linkTo }: Props) => {
  return (
    <Link 
          to={linkTo}
          className="mx-2 bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1 px-3 border border-blue-800 hover:border-transparent rounded-3xl">
          {children}
    </Link>
  )
}

export default BtnLinkBlue