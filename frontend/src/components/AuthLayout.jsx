

import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
        <div className="border-2 border-amber-600">
          <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout
