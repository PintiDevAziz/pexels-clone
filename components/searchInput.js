import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const SearchInput = ({ size }) => {
  return (
    <label
      className={`relative flex  ${
        size ? 'h-16' : 'h-[2.8rem]'
      } w-[40rem] items-center`}
    >
      <input
        type="text"
        className="h-full w-full rounded-md bg-white  px-4 outline-none"
        placeholder="Search for free photos"
      />
      <AiOutlineSearch className="absolute right-4 text-xl text-gray-600" />
    </label>
  )
}

export default SearchInput
