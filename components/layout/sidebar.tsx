import Link from 'next/link'
import React, { useState } from 'react'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { sidebarMenus } from '../../data/data'
import { Disclosure, Transition } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'
import { useStateContext } from '../../contexts/ContextProvider'

function Sidebar(props: any) {
  const { isSidebar, setIsSidebar } = useStateContext()

  return (
    <div
      className={`sidebar dark:bg-secondary-dark-bg bg-white h-screen fixed overflow-auto  pb-12 shadow-xl transition-all duration-300 ease-in-out  ${
        isSidebar ? 'w-72 px-6' : 'w-0'
      }`}
    >
      <div className='mt-4 flex justify-between items-center'>
        <Link href='/'>
          <a className='flex items-center gap-3 text-xl font-extrabold tracking-tight dark:text-white text-gray-600'>
            <SiShopware /> <span>Turz</span>
          </a>
        </Link>
        <button
          type='button'
          className='text-xl rounded-full hover:bg-light-gray dark:text-white text-gray-600 block md:hidden'
        >
          <MdOutlineCancel
            onClick={() => {
              setIsSidebar(!isSidebar)
            }}
          />
        </button>
      </div>

      <div className='mt-10'>
        {sidebarMenus.map((menu: any) => (
          <Disclosure as='div' key={menu.title} defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className='py-3 text-gray-400 dark:text-gray-400 uppercase w-full flex items-center justify-between'>
                  {menu.title}
                  <BsChevronDown
                    className={`transition duration-300 ease-in-out ${
                      !open && 'rotate-180'
                    }`}
                  />
                </Disclosure.Button>

                <Transition
                  show={open}
                  className='overflow-hidden'
                  enter='transition transition-[max-height] duration-300 ease-in-out'
                  enterFrom='transform max-h-0'
                  enterTo='transform max-h-screen'
                  leave='transition transition-[max-height] duration-300 ease-in-out'
                  leaveFrom='transform max-h-screen'
                  leaveTo='transform max-h-0'
                >
                  <Disclosure.Panel className='text-gray-500'>
                    {menu.children?.map((child: any) => (
                      <Link key={child.name} href={child.path}>
                        <a className='py-3 pl-3 flex justify-start items-center gap-x-5 capitalize rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray'>
                          {child.icon}
                          {child.name}
                        </a>
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
