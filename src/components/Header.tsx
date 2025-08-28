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
      <header className="h-12 border-b border-neutral-900 bg-neutral-900 text-gray-100 flex items-center px-4 justify-between">
        <div className="min-w-24">
          <Link to="/" className="font-semibold tracking-tight select-none">My Sandbox</Link>
        </div>
        <nav className="flex-1 flex items-center gap-2 justify-start px-4">
          {apps.map(app => (
              app.externalUrl ? (
                // 외부 링크는 a 태그로 새 탭
                <a
                  key={app.slug}
                  href={app.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded text-sm hover:bg-neutral-800"
                >
                  {app.title}
                </a>
              ) : ( <a
                   key={app.slug}
                   href={`/apps/${app.slug}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-3 py-1.5 rounded text-sm hover:bg-neutral-800"
                 >
                   {app.title}
                 </a>)
          )
          
          )}
          
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