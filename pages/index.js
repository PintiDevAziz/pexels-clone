import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels'
import BottomSection from '../components/BottomSection'
import { AiOutlineSearch } from 'react-icons/ai'
import SearchInput from '../components/SearchInput'
import Image from 'next/image'
import Loader from '../components/Loader'
const Index = ({ query, setQuery, input, setInput }) => {
  const [images, setImages] = useState([])
  const [bannerImage, setBannerImage] = useState()
  const client = createClient(
    '563492ad6f917000010000013e55f6ae4ca84129b9375bde8858b523'
  )
  const pageCount = 50
  useEffect(() => {
    client.photos
      .search({ query, per_page: pageCount })
      .then((data) => setImages(data.photos))
  }, [query])
  useEffect(() => {
    setBannerImage(images[Math.round(Math.random() * pageCount)])
  }, [images, query])
  return (
    <div>
      <div className="relative flex h-[33rem] items-center  justify-center">
        {bannerImage ? (
          <div className="absolute top-0 z-[0] h-full w-full bg-center object-cover">
            <Image
              layout={'fill'}
              objectFit={'cover'}
              objectPosition={'center'}
              alt={bannerImage && bannerImage.alt}
              src={bannerImage && bannerImage.src.original}
            />
          </div>
        ) : (
          <div className="absolute top-0 z-[0] flex h-full w-full items-center justify-center bg-center object-cover">
            <Loader height={200} width={200} />
          </div>
        )}
        <div className="z-[1]">
          <h1 className="mb-4 w-[40rem] text-3xl font-semibold leading-10 text-white">
            Photo by Miriam Salgado The best free stock photos, royalty free
            images & videos shared by creators.
          </h1>
          <SearchInput setQuery={setQuery} input={input} setInput={setInput} size={31}/>
        </div>
      </div>
      <BottomSection images={images} query={query} setImages={setImages} />
    </div>
  )
}

export default Index
