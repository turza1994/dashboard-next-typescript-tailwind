import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { BsChevronDown } from 'react-icons/bs'
import avatar from '../data/avatar.jpg'
import Image from 'next/image'

function Navbar(props: any) {
  const { isSidebar, setIsSidebar } = useStateContext()

  return (
    <div className='flex items-center justify-between w-full sticky top-0 py-1 px-8 shadow-sm text-xl dark:text-white text-gray-600'>
      <button type='button' className='rounded-full p-3 hover:bg-gray-100'>
        <AiOutlineMenu
          onClick={() => {
            setIsSidebar(!isSidebar)
          }}
        />
      </button>

      <div className='flex items-center'>
        <button className='rounded-full p-3 hover:bg-gray-100'>
          <FiShoppingCart />
        </button>
        <button className='rounded-full p-3 hover:bg-gray-100'>
          <BsChatLeft />
        </button>
        <button className='rounded-full p-3 hover:bg-gray-100'>
          <RiNotification3Line />
        </button>
        <button className='flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg text-base p-3 hover:bg-gray-100'>
          <Image
            className='rounded-full'
            width={32}
            height={32}
            src={avatar}
            alt='user-profile'
          />
          <p>
            <span className='text-gray-400 '>Hi,</span>{' '}
            <span className='text-gray-400 font-bold ml-1 '>Michael</span>
          </p>
          <BsChevronDown className='text-gray-400 pt-1.5' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
