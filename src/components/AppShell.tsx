import { Outlet, Link, useLocation } from "react-router-dom";
import { auth } from "@/lib/auth";
import Header from './Header'
import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
}

export default function AppShell({ children }: Props) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <div className="grid grid-cols-[260px_1fr] min-h-0">
        <Sidebar />
        <main className="p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
// export default function AppShell() {
//   const { pathname } = useLocation();
//   return (
//     <div className="min-h-screen grid grid-cols-[240px_1fr]">
//       <aside className="bg-neutral-900 p-4">
//         <div className="text-xl font-bold mb-4">React Sandbox</div>
//         <nav className="flex flex-col gap-2">
//           <Link className={navCls(pathname === "/dashboard" || pathname === "/")} to="/dashboard">Dashboard</Link>
//           <Link className={navCls(pathname.startsWith("/apps/todo"))} to="/apps/todo">Todo</Link>
//           <button className="text-left rounded px-2 py-1 hover:bg-neutral-800" onClick={auth.logout}>
//             Logout
//           </button>
//         </nav>
//       </aside>
//       <main className="p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

function navCls(active: boolean) {
  return [
    "rounded px-2 py-1 hover:bg-neutral-800",
    active ? "bg-neutral-800 font-semibold" : ""
  ].join(" ");
}


