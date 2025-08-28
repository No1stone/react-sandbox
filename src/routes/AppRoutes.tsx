import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import AppShell from '../components/AppShell'
import Charts from '../pages/sidebar/Charts'
import Progress from '../pages/sidebar/Progress'
import ButtonsPage from '../pages/sidebar/ButtonsPage'
import Forms from '../pages/sidebar/Forms'
import AppStandalone from '../components/AppStandalone'
import TodoApp from '../apps/TodoPage'
import TodoApp2 from '../apps/TodoPage2'
import GithubApp from '../apps/TodoPage2'

function Protected({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/login" replace />;
}


export default function AppRoutes() {
  return (

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Protected>
              <AppShell />
            </Protected>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sidebar/charts" element={<Charts />} />
          <Route path="sidebar/progress" element={<Progress />} />
          <Route path="sidebar/buttons" element={<ButtonsPage />} />
          <Route path="sidebar/forms" element={<Forms />} />
          {/* <Route path="apps/:slug" element={<SomeApp />} /> */}
        </Route>
        <Route
        path="/apps"
        element={
          <Protected>
            <AppStandalone />
          </Protected>
        }
      >
        <Route path="todo" element={<TodoApp />} />
        <Route path="todo2" element={<TodoApp2 />} />
        <Route path="github" element={<GithubApp />} />
      </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

  );
}
