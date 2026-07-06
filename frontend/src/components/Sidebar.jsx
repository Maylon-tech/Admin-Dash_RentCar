import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTools } from 'react-icons/fa'
import { FaCarSide, FaPeopleGroup } from 'react-icons/fa6'
import { IoClose, IoHome } from 'react-icons/io5'
import { IoMdSettings } from 'react-icons/io'
import { MdCarRental } from 'react-icons/md'
import { MdLogout } from 'react-icons/md'

const navItems = [
  {
    name: 'Pagina Inicial',
    path: '/',
    icon: <IoHome />,
  },
  {
    name: 'Alugar Carros',
    path: '/rentCar',
    icon: <MdCarRental />,
  },
  {
    name: 'Carros',
    path: '/carsList',
    icon: <FaCarSide />,
  },
  {
    name: 'Clientes',
    path: '/clientList',
    icon: <FaPeopleGroup />,
  },
  {
    name: 'Servicos',
    path: '/services',
    icon: <FaTools />,
  },
  {
    name: 'Configuracao',
    path: '/settings',
    icon: <IoMdSettings />,
  },
  {
    name: 'Sair',
    path: '/login',
    icon: <MdLogout />,
  },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <aside
      className={`fixed left-0 top-[80px] z-10 h-[calc(100vh-89px)] w-64 bg-[var(--color-darkblue-soft)] px-4 py-6 shadow-xl transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button
        type="button"
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        onClick={() => setIsOpen((currentState) => !currentState)}
        className={`absolute top-4 flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-darkblue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] ${
          isOpen ? 'right-4' : '-right-14'
        }`}
      >
        {isOpen ? <IoClose size={22} /> : <FaBars size={18} />}
      </button>

      <nav className="mt-14 flex flex-col gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-[var(--color-gold)] transition-colors duration-200 hover:bg-[var(--color-darkblue)] ${
                isActive ? 'bg-[var(--color-darkblue)]' : 'bg-white/5'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
