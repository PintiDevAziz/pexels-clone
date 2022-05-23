import Image from 'next/image'
import React from 'react'

const ImageItem = ({ image }) => {
  return (
    <div className=" relative w-[25rem] h-[30rem] flex-shrink-0">
      <Image
        src={image && image.src.original}
        alt=""
        layout="fill"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default ImageItem
