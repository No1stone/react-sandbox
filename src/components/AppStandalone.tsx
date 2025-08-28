// src/components/AppStandalone.tsx
import { Outlet } from 'react-router-dom'

export default function AppStandalone() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      {/* 필요하면 여기 헤더 없이, 앱만 풀화면 */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
