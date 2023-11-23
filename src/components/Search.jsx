import React from 'react'

export default function Search({searchText, handleSearchChange, placeholder}) {
  return (
    <div className='my-5'>
        <input
            value={searchText}
            onChange={handleSearchChange}
            placeholder={placeholder == null ? "Search" : placeholder}
            className='bg-gray-600 rounded-md p-2 text-white w-full'
        />
        </div>
  )
}
