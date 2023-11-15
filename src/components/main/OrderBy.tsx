
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdRemove  } from "react-icons/io";
import { useSearchParams } from "react-router-dom"


const OrderBy = () => {
    const [ _, setSortingParam ] = useSearchParams()
    const [ sortingType, setSortingType] = useState<boolean | null>(null)

    const togleSort = () => {
        if(sortingType === null || sortingType === false){
        
            setSortingParam((prevState) => {
            prevState.set("ob", "Az")
            return prevState
        })
        setSortingType(() => true)
        
        }else{
        setSortingType(() => false)
        setSortingParam((prevState) => {
            prevState.set("ob", "Za")
            return prevState
        })
        }
    }
  return (
    <div 
        onClick={togleSort}
        className=" m-2 cursor-pointer font-medium flex justify-start items-center w-20"
        >Pav 
        {sortingType === null ?
            <IoMdRemove size={30} />
            :
            sortingType === true ?
            <IoMdArrowDropdown size={30} />
            :
            <IoMdArrowDropup size={30} />
        }
    </div>
  )
}

export default OrderBy