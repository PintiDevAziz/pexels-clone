import React, { useEffect, useState } from 'react'
import BottomSectionMenu from '../components/BottomSectionMenu'
import { createClient } from 'pexels'
import CollectionItem from '../components/CollectionItem'
import Loader from '../components/Loader'
const discover = () => {
  const [collection, setCollection] = useState([])
  const client = createClient(
    '563492ad6f917000010000013e55f6ae4ca84129b9375bde8858b523'
  )
  useEffect(() => {
    client.collections.featured({ per_page: 3 }).then((data) => {
      setCollection(data.collections)
    })
  }, [])
  return (
    <div>
      <div className="pt-16 ">
        <BottomSectionMenu />
        <div className="w-full  px-32 pt-16">
          <h2 className="mb-6 text-3xl font-bold">Popular Collections</h2>
          <div className="flex h-[30rem] w-full items-start  justify-between gap-x-6">
            {collection.length > 0 ? (
              collection.map((item, indeks) => (
                <CollectionItem item={item} key={indeks} id={item.id} collection={collection} />
              ))
            ) : (
              <div className="flex w-full items-center justify-center">
                <Loader width={200} height={200} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default discover
