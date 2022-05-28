import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const SearchInput = ({ size, setQuery, input, setInput }) => {
  const router = useRouter()
  return (
    <label
      className={`relative flex  ${
        size ? 'h-16' : 'h-[2.8rem]'
      } w-[40rem] items-center`}
    >
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setQuery(input)
            router.push('/')
          }
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-full w-full rounded-md bg-white  px-4 outline-none"
        placeholder="Search for free photos"
      />
      <AiOutlineSearch
        className="absolute right-4 text-xl text-gray-600"
        onClick={() => {
          setQuery(input)
          router.push('/')
        }}
      />
    </label>
  )
}

export default SearchInput
