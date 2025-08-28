// src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom'
import sidebarMenu from './sidebarMenu'

export default function Sidebar() {
    return (
        <aside className="h-full border-r border-neutral-800 bg-neutral-900 text-gray-100 w-56 p-3">
        <div className="text-sm text-neutral-400 mb-2">UI Components</div>
        <nav className="space-y-1">
          {sidebarMenu.map(item => (
            <NavLink
              key={item.slug}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-sm ${
                  isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-50'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </aside>
    )
  }