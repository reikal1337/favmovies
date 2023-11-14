
type Props = {
    children: string
}
const BtnSmpleBlue = ({ children }: Props) => {
  return (
    <button 
          className="mx-2 bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1 px-3 border border-blue-800 hover:border-transparent rounded-3xl">
          {children}
    </button>
  )
}

export default BtnSmpleBlue