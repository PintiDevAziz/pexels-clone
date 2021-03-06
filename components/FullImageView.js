import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
const FullImageView = ({ modal, setModal, modalImage, firstImage }) => {
  const [srcs, setSrcs] = useState([])
  const [dropdown, setDropDown] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')
  const [downloadName, setDownloadName] = useState('file')
  useEffect(() => {
    if (modalImage) {
      setSrcs(Object.entries(modalImage.src))
    }
    setDownloadUrl('')
  }, [modal])
  console.log(firstImage)
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
            <div className=" group  relative z-[99999] flex h-full w-full flex-1 items-center justify-center border-l border-gray-600">
              <IoIosArrowDown
                onClick={() => {
                  setDropDown(!dropdown)
                }}
                className=" cursor-pointer text-xl outline-none "
                tabIndex={0}
              />
              <form
                className={`  absolute top-12 right-0 w-[18rem]    rounded  border bg-white p-2   text-black shadow-lg transition-all ${
                  dropdown
                    ? 'visible  translate-y-0 opacity-100'
                    : 'invisible -translate-y-10 opacity-0'
                }`}
              >
                <p className="font-semibold text-gray-500">Chose a size :</p>
                {srcs.map((item, key) => (
                  <label
                    className="flex h-10 items-center  gap-x-2 border-b  border-gray-300 px-4 font-semibold capitalize"
                    key={key}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={item[1]}
                      onClick={() => {
                        fetch(item[1])
                          .then((res) => res.blob())
                          .then((blob) =>
                            setDownloadUrl(URL.createObjectURL(blob))
                          )
                        setDownloadName(item[0])
                      }}
                      className="h-4 w-4 appearance-none rounded-full border-2 checked:bg-[#05A081]"
                    />
                    <p>{item[0]}</p>
                  </label>
                ))}
                <a
                  className={`mt-2 hover:bg-[#05A081] hover:text-white transition-all flex  h-10 items-center justify-center  border border-[#05A081] font-semibold ${
                    !downloadUrl && 'pointer-events-none opacity-50'
                  }`}
                  href={downloadUrl}
                  download={downloadName}
                >
                  Download{' '}
                </a>
              </form>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 h-[40rem] w-[30rem]">
          {modalImage ? (
            <Image
              src={modalImage.src.original}
              placeholder={'blur'}
              blurDataURL={modalImage.src.original}
              layout={'fill'}
              alt={modalImage.alt}
            />
          ) : null}
        </div>
      </div>
      <AiOutlineClose
        onClick={() => setModal(false)}
        className={`absolute top-6 left-6 text-3xl text-[#9DA5A5]`}
      ></AiOutlineClose>
    </div>
  )
}

export default FullImageView
