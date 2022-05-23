import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const BottomSectionMenu = () => {
  //! Router
  const router = useRouter()

  const menu = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Discover',
      path: '/discover',
    },
    {
      title: 'Videos',
      path: '/videos',
    },
  ]
  return (
    <div className="flex h-16 items-center justify-center gap-x-10 border-b-2 border-[#F2F2F2] text-lg">
      {menu.map((item, keky) => (
        <Link href={item.path} key={keky}>
          <a
            className={`flex h-full items-center justify-center box-content ${
              router.asPath == item.path
                ? 'border-b-[3px] border-[#0064F9]'
                : null
            }  font-semibold text-[#5E5E5E] hover:text-[#0064F9]`}
          >
            {item.title}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default BottomSectionMenu
