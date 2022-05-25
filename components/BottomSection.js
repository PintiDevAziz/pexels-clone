import React, { useState } from 'react'
import BottomSectionMenu from '../components/BottomSectionMenu'
import ImageItem from '../components/ImageItem'
import FullImageView from './FullImageView'
const BottomSection = ({ images }) => {
  const [modal, setModal] = useState(false)
  const [modalImage, setModalImage] = useState()
  return (
    <div>
      <BottomSectionMenu />
      <div className=" flex flex-wrap items-end justify-center gap-4  mt-6 ">
        {images &&
          images.map((image, key) => (
            <ImageItem
              setModal={setModal}
              image={image}
              key={key}
              modal={modal}
              modalImage={modalImage}
              setModalImage={setModalImage}
            />
          ))}
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
