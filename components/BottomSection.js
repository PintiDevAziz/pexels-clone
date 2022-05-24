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
      <div className=" mt-6  flex flex-col  ">
        <h1 className="mb-4 px-36 text-lg font-semibold ">Free Stock Photos</h1>
        <div className="  masonry sm:masonry-sm md:masonry-md flex   flex-wrap items-center justify-center space-y-4 ">
          {images &&
            images.map((image, key) => (
              <ImageItem
                setModal={setModal}
                image={image}
                key={key}
                modalImage={modalImage}
                setModalImage={setModalImage}
              />
            ))}
        </div>
      </div>
      <FullImageView
        modal={modal}
        setModal={setModal}
        modalImage={modalImage}
      />
    </div>
  )
}

export default BottomSection
