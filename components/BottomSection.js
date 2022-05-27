import React, { useEffect, useState } from 'react'
import BottomSectionMenu from '../components/BottomSectionMenu'
import ImageItem from '../components/ImageItem'
import FullImageView from './FullImageView'
import Loader from '../components/Loader'
const BottomSection = ({ images, query, setImages }) => {
  const [modal, setModal] = useState(false)
  const [modalImage, setModalImage] = useState()
  useEffect(() => {
    setImages([])
  }, [query])
  return (
    <div>
      <BottomSectionMenu />
      <div className=" mt-6 flex flex-wrap items-end justify-center  gap-4 ">
        {images.length > 0 ? (
          images.map((image, key) => (
            <ImageItem
              setModal={setModal}
              image={image}
              key={key}
              modal={modal}
              modalImage={modalImage}
              setModalImage={setModalImage}
            />
          ))
        ) : (
          <Loader width={100} height={100} />
        )}
      </div>
      <FullImageView
        modal={modal}
        firstImage={images[0]}
        setModal={setModal}
        modalImage={modalImage}
      />
    </div>
  )
}

export default BottomSection
