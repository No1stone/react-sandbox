// src/components/sidebarMenu.ts
export type SideMenu = {
    slug: string
    title: string
    path: string
  }
  
  const sidebarMenu: SideMenu[] = [
    { slug: 'charts', title: 'Charts', path: '/sidebar/charts' },
    { slug: 'progress', title: 'Progress', path: '/sidebar/progress' },
    { slug: 'buttons', title: 'Buttons', path: '/sidebar/buttons' },
    { slug: 'forms', title: 'Forms', path: '/sidebar/forms' },
  ]
  
  export default sidebarMenu
  