import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
const FullImageView = ({ modal, setModal, modalImage }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[99999999] flex h-full w-full items-center bg-black/80 transition-all ${
        modal ? 'scale-100' : 'scale-0'
      }`}
    >
      <div className=" mx-44 mt-12 h-full w-full rounded-lg bg-white p-4">
        <div className="flex w-full items-center justify-between px-36">
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-2">
              Thanks To{' '}
              <p className="font-semibold">
                {modalImage && modalImage.photographer}
              </p>
            </div>
            <Link
              href={(modalImage && modalImage.photographer_url) || ''}
              className="rounded border px-2 py-1 shadow"
            >
              <a className="border px-3 py-1 shadow-sm">Follow</a>
            </Link>
          </div>
          <div className="flex  h-10 w-48 items-center justify-between rounded bg-[#05A081] px-2 text-white">
            <a className="flex w-[80%] items-center justify-center px-2">
              Free download
            </a>
            <div className="  group relative flex h-full w-full flex-1 items-center justify-center border-l border-gray-600">
              <IoIosArrowDown
                className=" cursor-pointer text-xl outline-none "
                tabIndex={0}
              />
              <div className="invisible absolute top-10 right-0  w-[18rem] -translate-y-full bg-white text-black shadow-lg group-focus-within:visible group-focus-within:translate-y-0">
                Here is a dropdown
              </div>
            </div>
          </div>
        </div>
        <img
          src={modalImage && modalImage.src.original}
          alt={modalImage && modalImage.alt}
          className={' w-[40rem] mx-auto mt-10'}
        />
      </div>
      <AiOutlineClose
        onClick={() => setModal(false)}
        className={`absolute top-6 left-6 text-3xl text-[#9DA5A5]`}
      ></AiOutlineClose>
    </div>
  )
}

export default FullImageView
