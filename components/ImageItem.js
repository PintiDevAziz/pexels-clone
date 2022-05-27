import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const ImageItem = ({ image, setModal, setModalImage, modal }) => {
  useEffect(() => {
    if (!modal) {
      setModalImage('')
    }
  }, [modal])
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
        className=" relative h-[35rem] w-[28rem] cursor-pointer"
        onClick={(e) => {
          e.preventDefault()
          setModal(true)
          setModalImage(image)
        }}
      >
        <Image
          src={image && image.src.original}
          alt={image && image.alt}
          layout="fill"
          priority={true}
          placeholder={'blur'}
          blurDataURL={image.src.original}
          className="h-full w-full object-cover"
        />
      </a>
    </Link>
  )
}

export default ImageItem
