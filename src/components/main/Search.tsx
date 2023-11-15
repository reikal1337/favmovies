import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type Props = {
 addClassToLabel?: string
}

const Search = ({ addClassToLabel }: Props) => {

  const [serach, setSearch] = useState("")
  const [ _, setSerachParam ] = useSearchParams()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerachParam((prevState) => {
        prevState.set("paieska", e.target.value)
        return prevState
    })

    setSearch(e.target.value)
  }
  return (
    <div className="flex justify-center  items-center flex-col min-[400px]:flex-row mt-2">
    <label htmlFor="search" className={`mr-2 ${addClassToLabel}`}>Paieska:</label>
    <input 
        id='search'
        type="text"
        value={serach}
        placeholder="Paieska pagal varda..."
        onChange={handleSearchChange}
        className="text-black bg-gray-400 p-1 rounded-xl placeholder:text-gray-600"
      />
    </div>
  )
}

export default Search