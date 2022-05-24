import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const ImageItem = ({ image, setModal, setModalImage }) => {
  return (
    <Link
      href={`/photo/${
        image &&
        image.alt
          .toLowerCase()
          .replace(/[^\w ]+/g, '')
          .replace(/ +/g, '-')
      }`}
    >
      <a
        className=" relative min-h-[38rem] w-[28rem] cursor-pointer"
        onClick={(e) => {
          e.preventDefault()
          setModal(true)
          setModalImage(image)
        }}
      >
        <Image
          src={image && image.src.original}
          alt=""
          layout="fill"
          className="h-full w-full object-cover"
        />
      </a>
    </Link>
  )
}

export default ImageItem
