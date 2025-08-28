// src/components/Header.tsx
import { Link, NavLink, useNavigate } from 'react-router-dom'
import apps from '../apps'


export default function Header() {
    const nav = useNavigate()
    const onLogout = () => {
      localStorage.removeItem('accessToken')
      nav('/login', { replace: true })
    }
  
    return (
      <header className="h-12 border-b bg-white flex items-center px-4">
        <div className="min-w-24">
          <Link to="/" className="font-semibold tracking-tight select-none">MySPA</Link>
        </div>
        <nav className="flex-1 flex items-center gap-2 justify-start px-4">
          {apps.map(app => (
            <NavLink
              key={app.slug}
              to={app.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded text-sm ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`
              }
            >
              {app.title}
            </NavLink>
          ))}
          
          {/* <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `ml-2 px-3 py-1.5 rounded text-sm ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`
            }
          >
            Dashboard
          </NavLink> */}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onLogout} className="px-3 py-1.5 rounded border text-sm hover:bg-gray-50">로그아웃</button>
        </div>
      </header>
    )
  }