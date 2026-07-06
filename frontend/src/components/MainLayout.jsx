
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--color-white)] text-[var(--color-darkblue)] dark:bg-[var(--color-darkblue)] dark:text-[var(--color-white)]">
      <header className="fixed left-0 top-0 z-20 w-full">
        <Navbar />
      </header>

      <Sidebar />

      <main className="fixed bottom-0 left-64 right-0 top-[50px] z-0 flex items-center justify-center overflow-auto p-6">
        <section className="flex h-full w-full max-w-6xl items-center justify-center">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default MainLayout
