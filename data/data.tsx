import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from 'react-icons/ai'
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from 'react-icons/fi'
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from 'react-icons/bs'
import { BiColorFill } from 'react-icons/bi'
import { IoMdContacts } from 'react-icons/io'
import { RiContactsLine, RiStockLine } from 'react-icons/ri'
import { MdOutlineSupervisorAccount } from 'react-icons/md'
import { HiOutlineRefresh } from 'react-icons/hi'
import { TiTick } from 'react-icons/ti'
import { GiLouvrePyramid } from 'react-icons/gi'
import { GrLocation } from 'react-icons/gr'
import avatar from './avatar.jpg'
import avatar2 from './avatar2.jpg'
import avatar3 from './avatar3.png'
import avatar4 from './avatar4.jpg'
import product1 from './product1.jpg'
import product2 from './product2.jpg'
import product3 from './product3.jpg'
import product4 from './product4.jpg'
import product5 from './product5.jpg'
import product6 from './product6.jpg'
import product7 from './product7.jpg'
import product8 from './product8.jpg'

export const sidebarMenus: any = [
  {
    title: 'Dashboard',
    children: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
        path: '/empty',
      },
    ],
  },

  {
    title: 'Pages',
    children: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
        path: '/empty',
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
        path: '/empty',
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
        path: '/empty',
      },
    ],
  },
  {
    title: 'Apps',
    children: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
        path: '/',
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
        path: '/',
      },
      {
        name: 'editor',
        icon: <FiEdit />,
        path: '/',
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
        path: '/',
      },
    ],
  },
  {
    title: 'Charts',
    children: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
        path: '/',
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
        path: '/',
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
        path: '/',
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
        path: '/',
      },
      {
        name: 'financial',
        icon: <RiStockLine />,
        path: '/',
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
        path: '/',
      },
      {
        name: 'pyramid',
        icon: <GiLouvrePyramid />,
        path: '/',
      },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
        path: '/',
      },
    ],
  },
]
