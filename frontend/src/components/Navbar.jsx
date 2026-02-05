import { Link } from 'react-router-dom'
import { FaRegMoon } from "react-icons/fa"
import { FaSun } from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import { IoPersonSharp } from "react-icons/io5"

const Navbar = () => {
  return (
    <div className="bg-[#090c11] px-6 py-4 w-full flex items-center justify-between border-b border-slate-500"> 
      
      <div className="text-xl text-yellow-500">
        <Link to="/">
          <img src="../../public/Logo-01.jpg" className='w-15 h-15 cover rounded-full border-2 border-amber-700'/>
        </Link>
      </div>

      <div className="flex gap-4 px-6 py-2">

        <div className="text-xl">
          <button className='p-4 bg-[#121a27] text-white cursor-pointer'> 
            <FaRegMoon size="18" />
          </button>
        </div>

        <div className="text-xl text-yellow-500">
          <button className="p-4 bg-[#121a27] text-white cursor-pointer">
            <IoPersonSharp size="20" className='' />
            {/* <FaBars size="18" /> */}
          </button>
        </div>

      </div>

    </div>
  )
}

export default Navbar
