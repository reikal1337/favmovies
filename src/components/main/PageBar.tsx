import { RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri"
import { useSearchParams } from "react-router-dom"

type Props = {
    page: number,
    pageMax: number,
}

const PageBar = ({ page, pageMax }: Props) => {
    const [ _, setSearchParams] = useSearchParams()

    const returnPageButtons = () => {
        const pagesBtns = []
        for(let i = 1; i <= pageMax; i++){
            if(i !== page){
                pagesBtns.push(
                    <button key={i+page} className="text-white hover:text-gray-700 duration-300" onClick={() => changePage(i) }>{i}</button>
                )
            }else{
                pagesBtns.push(
                    <button key={i+page} className="cursor-default text-red-800">{i}</button>
                )
            }
        }
        return pagesBtns
    }

    const handlePageIncrease = () => {
        if(page !== pageMax){
            setSearchParams(prevState => {
                prevState.set("p", (++page).toString())
                return prevState
            })
        }
        
    }

    const handlePageDecrease = () => {
        if(page !== 1){
            setSearchParams(prevState => {
                prevState.set("p", (--page).toString())
                return prevState
            })
        }
        
    }

    const changePage = (pageNumber: number) => {
        setSearchParams(prevState => {
            prevState.set("p", pageNumber.toString())
            return prevState
        })
    }

  return (
    <div className="text-2xl w-full flex justify-center items-center gap-1">
        {page !== 1 &&
            <RiArrowLeftSLine
                className="cursor-pointer hover:text-gray-700 duration-300"
                size={35}
                onClick={() => handlePageDecrease()}
             />
        }
        {
            returnPageButtons()
        }
        {page !== pageMax &&
            <RiArrowRightSLine 
                className="cursor-pointer hover:text-gray-700 duration-300"
                size={35}
                onClick={() => handlePageIncrease()}
            />
        }
    </div>
  )
}

export default PageBar