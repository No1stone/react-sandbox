import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function AppShell() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <div className="grid grid-cols-[260px_1fr] min-h-0">
        <Sidebar />
        <main className="p-4 overflow-auto">
          <Outlet /> {/* 자식 라우트가 여기 렌더링 */}
        </main>
      </div>
    </div>
  )
}
