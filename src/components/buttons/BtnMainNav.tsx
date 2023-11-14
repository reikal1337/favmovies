
type Props = {
    children: string,
    addClass?: string
}

const BtnMainNav = ({ children, addClass }: Props) => {
  return (
    <button 
    className={`bg-white bg-opacity-5 rounded-tl-3xl w-1/2 h-full hover:bg-opacity-10 duration-300 ${addClass} `}>
          {children}
    </button>
  )
}

export default BtnMainNav