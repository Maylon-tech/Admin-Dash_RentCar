
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
    <div className='relative h-screen border-3'>
        <Navbar />
        <Sidebar />
        <div className="fixed z-0 top-24 right-0 w-6xl h-full">
          <Outlet />
        </div>
    </div>
  )
}

export default MainLayout
