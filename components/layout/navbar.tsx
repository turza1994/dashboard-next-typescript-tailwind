import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../../contexts/ContextProvider'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { BsChevronDown } from 'react-icons/bs'
import avatar from '../../data/avatar.jpg'
import Image from 'next/image'

function Navbar(props: any) {
  const { isSidebar, setIsSidebar } = useStateContext()

  return (
    <div className='flex items-center justify-between w-full sticky top-0 py-1 px-3 text-xl text-current-color bg-main-bg dark:bg-main-dark-bg'>
      <button
        type='button'
        className='rounded-full p-3 hover:bg-light-gray'
        onClick={() => {
          setIsSidebar(!isSidebar)
        }}
      >
        <AiOutlineMenu />
      </button>

      <div className='flex items-center'>
        <button className='rounded-full p-3 hover:bg-light-gray'>
          <FiShoppingCart />
        </button>
        <button className='rounded-full p-3 hover:bg-light-gray'>
          <BsChatLeft />
        </button>
        <button className='rounded-full p-3 hover:bg-light-gray'>
          <RiNotification3Line />
        </button>
        <button className='flex items-center gap-2 cursor-pointer rounded-lg text-base p-3 hover:bg-light-gray text-gray-600 dark:text-gray-100 dark:hover:text-gray-600'>
          <Image
            className='rounded-full'
            width={32}
            height={32}
            src={avatar}
            alt='user-profile'
          />
          <p>
            <span>Hi,</span> <span className=' font-bold ml-1 '>Michael</span>
          </p>
          <BsChevronDown className='pt-1.5' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
