import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { themeColors } from '../../data/dummy'

function Settingbar(props: any) {
  const {
    isSettingbar,
    setIsSettingbar,
    currentColor,
    setCurrentColor,
    currentMode,
    setCurrentMode,
    setMode,
    setColor,
  } = useStateContext()

  return (
    <div
      className={`h-screen fixed top-0 right-0  ${
        isSettingbar ? 'w-full' : 'w-0'
      }`}
    >
      <div
        className={`bg-half-transparent h-full w-full transition duration-300 ease-in-out ${
          isSettingbar ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='bg-main-bg dark:bg-secondary-dark-bg dark:text-white h-full w-fit ml-auto'>
          <div className='flex justify-between items-center p-4 ml-4'>
            <p className='font-semibold text-lg'>Settings</p>
            <button
              type='button'
              onClick={() => setIsSettingbar(false)}
              style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
              className='text-2xl  hover:drop-shadow-xl hover:bg-light-gray'
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className='flex-col border-t-1 border-color p-4 ml-4'>
            <p className='font-semibold text-xl '>Theme Option</p>
            <div className='mt-4'>
              <input
                type='radio'
                id='light'
                name='theme'
                value='light'
                className='cursor-pointer'
                onChange={setMode}
                checked={currentMode === 'light'}
              />
              <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
                Light
              </label>
            </div>
            <div className='mt-2'>
              <input
                type='radio'
                id='dark'
                name='theme'
                value='dark'
                onChange={setMode}
                className='cursor-pointer'
                checked={currentMode === 'dark'}
              />
              <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
                Dark
              </label>
            </div>
          </div>

          <div className='p-4 border-t-1 border-color ml-4'>
            <p className='font-semibold text-xl '>Theme Colors</p>
            <div className='flex flex-wrap gap-3'>
              {themeColors.map((item, index) => (
                <div
                  className='relative mt-2 cursor-pointer flex gap-5 items-center'
                  key={item.name}
                >
                  <button
                    type='button'
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settingbar
