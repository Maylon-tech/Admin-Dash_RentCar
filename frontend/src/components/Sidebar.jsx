import { Link } from "react-router-dom"
import { IoHome } from "react-icons/io5"
import { FaCarSide } from "react-icons/fa6"
import { FaPeopleGroup } from "react-icons/fa6"
import { FaTools } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { MdLogout } from "react-icons/md"

const navItems = [
  {
    name: "Pagina Inicial",
    path: "/",
    icon: <IoHome />
  },
  {
    name: "Carros",
    path: "/carsList",
    icon: <FaCarSide />
  },
  {
    name: "Clientes",
    path: "/clientList",
    icon: <FaPeopleGroup />
  },
  {
    name: "Servicos",
    path: "/services",
    icon: <FaTools />
  },
  {
    name: "Configuracao",
    path: "/settings",
    icon: <IoMdSettings />
  },
  {
    name: "Sair",
    path: "/login",
    icon: <MdLogout />
  },
]


const Sidebar = () => {
  return (
    <div className="h-screen bg-[#090c11] w-53 pt-12 px-4 flex flex-col fixed gap-4 items-center text-start">
      <div className="absolute top-2 right-2 text-white">X</div>

      {
        navItems.map((item, index) => (
          <Link
            key={index}
            className="flex gap-2 items-center justify-start px-6 py-4 rounded-md bg-[#1d2431ee] w-full"
            to={item.path}
          > 
            <span className="text-yellow-500 text-md">{item.icon}</span>
            <span className="text-yellow-500 text-md">{item.name}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar
