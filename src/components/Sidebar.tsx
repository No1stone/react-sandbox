// src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="h-full border-r bg-white p-3">
      <div className="text-sm text-gray-500 mb-2">Apps</div>
      <nav className="space-y-1 text-sm">
        <NavLink
          to="/apps/todo"
          className={({ isActive }) =>
            `block px-3 py-2 rounded ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-50'}`
          }
        >
          Todo
        </NavLink>
      </nav>
    </aside>
  )
}
