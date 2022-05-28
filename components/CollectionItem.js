import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels'
import Image from 'next/image'
import { MdOutlinePermMedia } from 'react-icons/md'
const CollectionItem = ({ id, collection, item }) => {
  const [colData, setColData] = useState([])
  const [loading, setLoading] = useState(true)
  const [miniImages, setMiniImages] = useState([])
  useEffect(() => {
    const client = createClient(
      '563492ad6f917000010000013e55f6ae4ca84129b9375bde8858b523'
    )
    client.collections.media({ id: id }).then((data) => {
      setColData(data)
      setLoading(false)
    })
  }, [])
  useEffect(() => {
    if (loading == false) {
      setMiniImages(colData?.media?.slice(1, 5))
    }
    console.log(miniImages)
  }, [loading])
  console.log(item)
  return (
    <div className="flex flex-col items-center  justify-center rounded-lg p-2 transition-colors hover:bg-gray-200">
      <div className=" flex  w-[26rem] flex-col  items-start justify-center overflow-hidden rounded-lg object-cover shadow-md">
        {!loading ? (
          <div className="relative min-h-[20rem] w-full overflow-hidden rounded-lg">
            <Image layout="fill" src={colData.media[0].src.original} alt="" />
          </div>
        ) : null}
        <div className="mt-1 flex h-[5rem]  w-full justify-between gap-x-1 overflow-hidden rounded-lg ">
          {miniImages.map((img, indeks) => (
            <img
              src={
                img.type == 'Photo'
                  ? img.src.original
                  : img.video_pictures[0].picture
              }
              alt=""
              className="w-[6rem]"
              key={indeks}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-between">
        <h2 className="text-xl font-bold ">{item.title}</h2>
        <div>
          <MdOutlinePermMedia />
          {item.mediaCount}
        </div>
      </div>
    </div>
  )
}

export default CollectionItem
