import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type Props = {
 addClass?: string
}

const Search = ({addClass}: Props) => {

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
    <input 
            type="text"
            value={serach}
            placeholder="Paieska pagal varda..."
            onChange={handleSearchChange}
            className="text-black bg-gray-400 p-1 rounded-xl mt-2"
          />
  )
}

export default Search