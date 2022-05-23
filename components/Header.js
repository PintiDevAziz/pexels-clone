import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
const Header = () => {
  const [isMenuChanged, setIsMenuChanged] = useState(false)
  const [lastScroll,setLastScroll]=useState(0)
  const menu = [
    {
      title: 'Explore',
      path: '/discover',
      submenues: [
        {
          title: 'Discover Photos',
          path: '/discover',
        },
        {
          title: 'Popular Searches',
          path: '/popular-searches',
        },
        {
          title: 'Free Videos',
          path: '/vidoes',
        },
      ],
    },
    {
      title: 'Licence',
      path: '/licence',
    },
  ]
  const scrollMenu = () => {
    if (window.scrollY > lastScroll) {
      setIsMenuChanged(true)
    } else {
      setIsMenuChanged(false)
    }
    setLastScroll(window.scrollY); 

  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollMenu);

      return () => {
        window.removeEventListener('scroll', scrollMenu);
      };
    }
  }, [lastScroll]);
  return (
    <div
      className={` z-[9999]   flex h-16 w-full items-center justify-between  px-8  transition-all  ${
        isMenuChanged ? '  fixed top-0  bg-[#232A34]  ' : 'absolute '
      }`}
    >
      <div className="flex items-center">
        <div className="mr-6 flex items-center gap-x-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image src={'/logo.svg'} layout="fill" />
          </div>
          <p className="text-xl font-semibold  text-white">Pexels</p>
        </div>
        {isMenuChanged && (
          <label className="relative flex  h-[2.8rem] w-[40rem] items-center">
            <input
              type="text"
              className="h-full w-full rounded-md bg-white  px-4 outline-none"
              placeholder="Search for free photos"
            />
            <AiOutlineSearch className="absolute right-4 text-xl text-gray-600" />
          </label>
        )}
      </div>
      <div className="flex items-center">
        <div className="flex gap-x-6 font-semibold ">
          {menu.map((item, key) => (
            <Link key={key} href={item.path}>
              <a className="group relative translate-y-1  text-white hover:text-gray-300">
                {item.title}
                {item.path == '/discover' && (
                  <>
                    <div className="h-2"></div>
                    <div className="absolute left-[-8rem] flex  w-[12rem] scale-0 flex-col rounded-md bg-white py-3  text-black shadow-xl group-hover:scale-100">
                      {item.submenues.map((subItem, subKey) => (
                        <Link href={subItem.path} key={subKey}>
                          <a className="w-full px-4 py-2 hover:bg-gray-300">
                            {subItem.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </a>
            </Link>
          ))}
        </div>
        <IoIosNotificationsOutline className="ml-6 cursor-pointer text-xl text-white" />
      </div>
    </div>
  )
}

export default Header
