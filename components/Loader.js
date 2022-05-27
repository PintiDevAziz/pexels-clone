import React from 'react'

const Loader = ({ width, height }) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="animate-spin rounded-full border-4 border-r-[#05A081] "
    >
    </div>
  )
}

export default Loader
