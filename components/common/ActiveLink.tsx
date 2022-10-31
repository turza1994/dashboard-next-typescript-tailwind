import { useRouter } from 'next/router'

function ActiveLink({ children, href }: any) {
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={` py-3 pl-3 flex justify-start items-center gap-x-5 capitalize rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray transition duration-100 ease-linear ${
        router.pathname === href ? '' : ''
      }`}
    >
      {children}
    </a>
  )
}

export default ActiveLink
