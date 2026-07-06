import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
import { IoPersonSharp } from 'react-icons/io5'

const Navbar = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <nav className="flex w-full items-center justify-between border-b border-[var(--color-darkblue)] bg-[var(--color-white)] px-6 py-4 shadow-sm dark:bg-[var(--color-darkblue-soft)]">
      <Link to="/" aria-label="Go to dashboard" className="flex items-center">
        <img
          src="/Logo-01.jpg"
          alt="Rent Cars logo"
          className="h-14 w-14 rounded-full border-2 border-[var(--color-darkblue)] object-cover"
        />
      </Link>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={() => setDark((currentTheme) => !currentTheme)}
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-darkblue)] text-[var(--color-white)] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-darkblue)] focus:ring-offset-2 dark:bg-[var(--color-white)] dark:text-[var(--color-darkblue)]"
        >
          {dark ? <FaRegSun size={18} /> : <FaRegMoon size={18} />}
        </button>

        <button
          type="button"
          aria-label="Open user profile"
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-darkblue)] text-[var(--color-white)] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-darkblue)] focus:ring-offset-2 dark:bg-[var(--color-white)] dark:text-[var(--color-darkblue)]"
        >
          <IoPersonSharp size={20} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
