import React from 'react'
import BottomSectionMenu from '../components/BottomSectionMenu'
import ImageItem from '../components/ImageItem'
const BottomSection = ({ images }) => {
  return (
    <div>
      <BottomSectionMenu />
      <div className=" mt-6  flex flex-col  ">
        <h1 className="text-lg font-semibold px-36 mb-4 ">Free Stock Photos</h1>
        <div className="  flex flex-wrap items-center justify-center gap-4  ">
          {images &&
            images.map((image, key) => <ImageItem image={image} key={key} />)}
        </div>
      </div>
    </div>
  )
}

export default BottomSection
