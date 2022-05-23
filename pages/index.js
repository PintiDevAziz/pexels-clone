import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels'
import SearchInput from '../components/searchInput'
import BottomSection from '../components/BottomSection'
const Index = () => {
  const [images, setImages] = useState([])
  const [bannerImage, setBannerImage] = useState()
  const client = createClient(
    '563492ad6f917000010000013e55f6ae4ca84129b9375bde8858b523'
  )
  const pageCount = 50
  const query = 'all'
  useEffect(() => {
    client.photos
      .search({ query, per_page: pageCount })
      .then((data) => setImages(data.photos))
  }, [])
  console.log(images)
  useEffect(() => {
    setBannerImage(images[Math.round(Math.random() * pageCount)])
  }, [images])
  console.log(bannerImage)
  return (
    <div>
      <div className="relative flex h-[33rem] items-center  justify-center">
        <img
          alt={bannerImage && bannerImage.alt}
          src={bannerImage && bannerImage.src.original}
          className="absolute top-0 z-[0] h-full w-full object-cover bg-center"
        />
        <div className="z-[1]">
          <h1 className="mb-4 w-[40rem] text-3xl font-semibold leading-10 text-white">
            Photo by Miriam Salgado The best free stock photos, royalty free
            images & videos shared by creators.
          </h1>
          <SearchInput size={20} />
        </div>
      </div>
      <BottomSection images={ images}/>

    </div>
  )
}

export default Index
